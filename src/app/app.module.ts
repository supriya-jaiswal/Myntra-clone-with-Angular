import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogElementsComponent } from './dialog-elements/dialog-elements.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { SliderModule } from 'angular-image-slider';
import { JeansComponent } from './westernwear/jeans/jeans.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';










@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,

    DialogElementsComponent,

    ImagesliderComponent,

    JeansComponent,

    ShoppingcartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    SliderModule






  ],
  entryComponents: [DialogElementsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
