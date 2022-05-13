import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, PRODUCTS_KEY } from './store';

export namespace ProductsSelectors {
  export const productsStore = createFeatureSelector<ProductsState>(PRODUCTS_KEY);

  export const productList = createSelector(productsStore, (state) => state.products);

  export const productOrders = createSelector(productsStore, (state) => state.orders);

  export const isLoadingProducts = createSelector(productsStore, (state) => state.loadings.includes('productList'));

  export const isLoadingProductOrderCreate = createSelector(productsStore, (state) =>
    state.loadings.includes('create')
  );

  export const isLoading = createSelector(productsStore, (state) => !!state.loadings.length);
}
