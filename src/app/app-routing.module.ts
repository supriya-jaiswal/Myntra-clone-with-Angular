import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { JeansComponent } from './westernwear/jeans/jeans.component'
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component'



const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'westernwear', component: JeansComponent },
  { path: 'imageslider', component: ImagesliderComponent },
  { path: 'bag', component: ShoppingcartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
