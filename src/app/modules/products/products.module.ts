import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1CheckboxModule } from '@form-controls/b1-checkbox/b1-checkbox.module';
import { B1TextareaModule } from '@form-controls/b1-textarea/b1-textarea.module';
import { B1ButtonModule } from '@ui/b1-button/b1-button.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1SkeletonModule } from '@ui/b1-skeleton/b1-skeleton.module';
import { NumberToArrayModule } from '@pipes/number-to-array/number-to-array.module';
import { MobileClassModule } from '@directives/mobile-class/mobile-class.module';

import { ProductsComponent } from './products.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ProductOrderFormComponent } from './components/product-order-form/product-order-form.component';

import { ProductsEffects } from './store/effects';

@NgModule({
  declarations: [ProductsComponent, ProductsHeaderComponent, ProductOrderFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    TranslateModule,
    B1CheckboxModule,
    B1TextareaModule,
    B1ButtonModule,
    B1IconModule,
    B1SkeletonModule,
    MobileClassModule,
    NumberToArrayModule,
    EffectsModule.forFeature([ProductsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
      },
    ]),
  ],
})
export class ProductsModule {}
