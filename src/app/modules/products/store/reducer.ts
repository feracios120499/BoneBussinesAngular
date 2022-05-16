import { createReducer, on } from '@ngrx/store';

import { pushIfNotExist, removeItem } from '@store/shared';
import { ProductsActions } from './actions';
import { initialState } from './store';

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProductsRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'productList')],
  })),
  on(ProductsActions.loadProductsSuccess, ProductsActions.loadProductsFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'productList')],
  })),
  on(ProductsActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.payload,
  })),
  on(ProductsActions.createProductOrderRequest, (state) => ({
    ...state,
    loadings: [...pushIfNotExist(state.loadings, 'create')],
  })),
  on(ProductsActions.createProductOrderSuccess, ProductsActions.createProductOrderFailure, (state) => ({
    ...state,
    loadings: [...removeItem(state.loadings, 'create')],
  })),
  on(ProductsActions.createProductOrderSuccess, (state, action) => ({
    ...state,
    orders: [...state.orders, action.payload],
  }))
);
