import { createAction } from '@ngrx/store';

import { createHTTPActions } from '@store/shared';
import { PRODUCTS_KEY } from './store';
import { Product } from '../models/product.model';
import { ProductOrderForm } from '../models/product-order-form.model';

export namespace ProductsActions {
  export const init = createAction(`[${PRODUCTS_KEY}] init`);

  export const destroy = createAction(`[${PRODUCTS_KEY}] destroy`);

  export const [loadProductsRequest, loadProductsSuccess, loadProductsFailure] = createHTTPActions<
    void,
    Product[],
    string
  >(`[${PRODUCTS_KEY}] load products`);

  export const [createProductOrderRequest, createProductOrderSuccess, createProductOrderFailure] = createHTTPActions<
    ProductOrderForm,
    ProductOrderForm,
    string
  >(`[${PRODUCTS_KEY}] create product order`);
}
