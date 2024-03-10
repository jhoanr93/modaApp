import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prendas',
    loadChildren: () => import('./prendas/prendas.module').then(m => m.PrendasModule)
  },
  {
    path: '',
    redirectTo: 'prendas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'prendas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
