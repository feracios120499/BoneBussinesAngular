import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseSubFormComponent } from '@form-controls/base-sub-form.component';
import { distinctUntilObjectChanged } from '@custom-operators/distinct-until-object-changed.operator';
import { ProductOrderForm } from '@modules/products/models/product-order-form.model';
import { ProductsSelectors } from '@modules/products/store/selectors';
import { Product } from '@modules/products/models/product.model';
import { checklistRequired } from '@validators/checklist-required.validator';
import { ModelControl } from '@b1-types/model-controls.type';

const { required } = Validators;

interface ProductOrderFormValue extends Omit<ProductOrderForm, 'productIdList'> {
  productIdList: boolean[];
}

@Component({
  selector: 'app-product-order-form',
  templateUrl: './product-order-form.component.html',
  styleUrls: ['./product-order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(ProductOrderFormComponent)],
})
export class ProductOrderFormComponent extends BaseSubFormComponent implements OnInit {
  isLoadingProducts$: Observable<boolean> = this.store.select(ProductsSelectors.isLoadingProducts);
  formGroup!: FormGroup;
  productControlsArray = new FormArray([], checklistRequired);
  commentControl = new FormControl('', [required]);
  products: Product[] = [];
  expandedProductIds: string[] = [];
  private inputValue?: ProductOrderForm;

  @ViewChild('formRef') formRef!: NgForm;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
    this.store
      .select(ProductsSelectors.productList)
      .pipe(
        filter((products: Product[]) => !!products.length),
        take(1)
      )
      .subscribe((products: Product[]) => {
        this.products = this.flattenProducts(products);
        this.products.forEach(() => this.productControlsArray.push(new FormControl(false)));
        // to update value according to uploaded products:
        if (this.inputValue) {
          this.writeValue(this.inputValue);
        }
      });
  }

  writeValue(value: ProductOrderForm): void {
    if (!value) {
      return;
    }
    this.inputValue = value;
    const productIdList: boolean[] = this.mapToBooleans(value.productIdList);
    const formValue: ProductOrderFormValue = {
      comment: value.comment,
      productIdList,
    };
    this.formGroup.patchValue(formValue);
    this.updateTreeValidity(this.formGroup);
  }

  onProductToggle(id: string): void {
    this.expandedProductIds = this.expandedProductIds.includes(id)
      ? this.expandedProductIds.filter((productId) => productId !== id)
      : [...this.expandedProductIds, id];
  }

  protected formChange(formValue$: Observable<ProductOrderFormValue>): Observable<ProductOrderFormValue> {
    return formValue$.pipe(
      distinctUntilObjectChanged(),
      tap((formValue: ProductOrderFormValue) => {
        const productIdList: string[] = this.mapToStrings(formValue.productIdList);
        const value: ProductOrderForm = {
          productIdList,
          comment: formValue.comment,
        };
        this.onChange(value);
      })
    );
  }

  private initForm(): void {
    const controls: ModelControl<ProductOrderForm> = {
      productIdList: this.productControlsArray,
      comment: this.commentControl,
    };
    this.formGroup = new FormGroup(controls);
  }

  private flattenProducts(products: Product[]): Product[] {
    let result: Product[] = [];
    products.forEach((product: Product) => {
      result.push(product);
      if (product.subProducts.length) {
        result = result.concat(product.subProducts);
      }
    });
    return result;
  }

  private mapToBooleans(stringIds: string[]): boolean[] {
    return this.products.map((product: Product) => stringIds.includes(product.id));
  }

  private mapToStrings(booleanIds: boolean[]): string[] {
    return this.products.filter((_, i: number) => booleanIds[i]).map((product: Product) => product.id);
  }
}
