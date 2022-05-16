import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, takeUntil } from 'rxjs/operators';
import { Actions, createEffect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

import { ProductsActions } from './actions';
import { ProductsService } from '../services/products.service';
import { ServerError } from '@models/errors/server-error.model';
import { NotifyActions } from '@store/notify/actions';
import { Product } from '../models/product.model';
import { clientIdWithData } from '@store/shared';

@Injectable()
export class ProductsEffects implements OnRunEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private productsService: ProductsService,
    private translateService: TranslateService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProductsRequest),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((products: Product[]) => ProductsActions.loadProductsSuccess(products)),
          catchError((error: ServerError) =>
            of(
              ProductsActions.loadProductsFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.products.errors.loadProducts'),
              })
            )
          )
        )
      )
    )
  );

  createProductOrderRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProductOrderRequest),
      switchMap((action) => clientIdWithData(this.store, action.payload)),
      switchMap(({ clientId, data }) =>
        this.productsService.createProductOrder(clientId, data).pipe(
          map(() => ProductsActions.createProductOrderSuccess(data)),
          catchError((error: ServerError) =>
            of(
              ProductsActions.createProductOrderFailure(error.message),
              NotifyActions.serverErrorNotification({
                error,
                message: this.translateService.instant('components.products.errors.createProductOrder'),
              })
            )
          )
        )
      )
    )
  );

  createProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProductOrderSuccess),
      switchMap(() => [
        NotifyActions.successNotification({
          message: this.translateService.instant('components.prm.createdSuccess'),
        }),
      ])
    )
  );

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(ProductsActions.init),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(ProductsActions.destroy)))))
    );
  }
}
