import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cd',
    pathMatch: 'full'
  },
  {
    path: 'cd',
    loadChildren: () => import('./client-data/client-data.module').then((m) => m.ClientDataModule),
  },
  {
    path: 'fs',
    loadChildren: () => import('./financial-situation/financial-situation.module').then((m) => m.FinancialSituationModule),
  },
  {
    path: 'dd',
    loadChildren: () => import('./client-data/client-data.module').then((m) => m.ClientDataModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
