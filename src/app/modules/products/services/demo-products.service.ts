import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { BaseProductsService } from './base-products.service';
import { Product } from '../models/product.model';
import { ProductOrderForm } from '../models/product-order-form.model';
import { DemoError } from '@models/errors/demo-error.model';

@Injectable({
  providedIn: 'root',
})
export class DemoProductsService extends BaseProductsService {
  private products: Product[] = [
    {
      $id: '1',
      productType: null,
      id: '1',
      parentId: null,
      name: this.translateService.instant('components.prm.deposit'),
      description: this.translateService.instant('components.prm.description'),
      typeId: '2',
      isEnabled: true,
      dateStart: new Date('2016-05-13T00:00:00'),
      dateEnd: null,
      subProducts: [
        {
          $id: '2',
          productType: null,
          id: '10',
          parentId: '1',
          name: this.translateService.instant('components.prm.relatedProduct'),
          description: this.translateService.instant('components.prm.description'),
          typeId: '2',
          isEnabled: true,
          dateStart: new Date('2016-05-18T07:10:47'),
          dateEnd: null,
          subProducts: [],
        },
      ],
    },
    {
      $id: '4',
      productType: null,
      id: 'e148163d-0d5d-493b-8a1e-107348089a95',
      parentId: null,
      name: this.translateService.instant('components.prm.loan'),
      description: this.translateService.instant('components.prm.orderLoan'),
      typeId: '1',
      isEnabled: true,
      dateStart: new Date('2016-05-18T12:35:03'),
      dateEnd: null,
      subProducts: [
        {
          $id: '5',
          productType: null,
          id: '96aab262-33ea-473f-962d-b855b2eca6fe',
          parentId: 'e148163d-0d5d-493b-8a1e-107348089a95',
          name: this.translateService.instant('components.prm.relatedProduct'),
          description: this.translateService.instant('components.prm.description'),
          typeId: null,
          isEnabled: true,
          dateStart: new Date('2016-05-18T06:53:25'),
          dateEnd: null,
          subProducts: [],
        },
      ],
    },
  ];

  constructor(private translateService: TranslateService) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  createProductOrder(clientId: string, orderData: ProductOrderForm): Observable<void> {
    return throwError(new DemoError());
  }
}
