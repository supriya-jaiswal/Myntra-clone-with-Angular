import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from './../itemservice.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
 carts ;
 totalPrice;


  constructor(private itemService : ItemserviceService) { }

  ngOnInit() {
    this.carts = this.itemService.getCart()
    this.totalPrice = this.itemService.getPrice()







  }

}
