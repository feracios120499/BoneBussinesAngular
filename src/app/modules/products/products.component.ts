import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { withDestroy } from '@mixins/with-destroy.mixin';
import { PRODUCTS_KEY } from './store/store';
import { productsReducer } from './store/reducer';
import { ProductsActions } from './store/actions';
import { ProductsSelectors } from './store/selectors';
import { ProductOrderFormComponent } from './components/product-order-form/product-order-form.component';
import { ProductOrderForm } from './models/product-order-form.model';
import { AppActions } from '@store/app/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent extends withDestroy() implements OnInit, AfterViewInit, OnDestroy {
  isLoading$: Observable<boolean> = this.store.select(ProductsSelectors.isLoadingProductOrderCreate);
  isOrderCreated$: Observable<boolean> = this.store.select(ProductsSelectors.productOrders).pipe(
    filter((orders) => !!orders.length),
    map(() => true)
  );
  productOrderForm!: ProductOrderForm;

  @ViewChild('formRef') private formRef!: ProductOrderFormComponent;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.store.addReducer(PRODUCTS_KEY, productsReducer);
    this.store.dispatch(ProductsActions.init());
    this.store.dispatch(AppActions.setPageLoader({ loader: ProductsSelectors.isLoading }));
    this.store.dispatch(ProductsActions.loadProductsRequest());
  }

  ngAfterViewInit(): void {
    this.isOrderCreated$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.formRef.resetForm();
    });
  }

  onProductOrderConfirm(): void {
    if (this.formRef.submitForm() && this.productOrderForm) {
      this.store.dispatch(ProductsActions.createProductOrderRequest(this.productOrderForm));
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.store.dispatch(AppActions.setPageLoader({}));
    this.store.removeReducer(PRODUCTS_KEY as never);
    this.store.dispatch(ProductsActions.destroy());
  }
}
