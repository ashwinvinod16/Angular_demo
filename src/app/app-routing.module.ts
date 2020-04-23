import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProdlistComponent } from './prodlist/prodlist.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'category',
    component:ProductComponent
  },
  {
    path:'category/:id',
    component:ProductViewComponent
  },
  {
    path:':id',
    component:ProdlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
