import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  {
    path: ':cardId/:accountId',
    loadChildren: () =>
      import('./modules/card-details/card-details.module').then(
        (p) => p.CardDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
