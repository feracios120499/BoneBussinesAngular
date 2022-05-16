import { ProductOrderForm } from '../models/product-order-form.model';
import { Product } from '../models/product.model';
import { ProductsLoading } from '../models/products-loading.type';

export const PRODUCTS_KEY = 'products';

export interface ProductsState {
  products: Product[];
  loadings: ProductsLoading[];
  orders: ProductOrderForm[];
}

export const initialState: ProductsState = {
  products: [],
  loadings: [],
  orders: [],
};
