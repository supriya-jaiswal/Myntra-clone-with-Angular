import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ItemserviceService } from './../itemservice.service';


@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {

  @Output() productAdded = new EventEmitter();

public image;
public details;
brand;
price;
description;
item:any;
@Input() cart:[];
@Input() public edited = false
buttonclicked =  "Add To Cart";
  constructor(private itemService : ItemserviceService) { }

  ngOnInit() {
// this.image = this.itemService.image
// this.details = this.itemService.details;
// this.brand = this.itemService.brand
// this.price = this.itemService.price
// this.description = this.itemService.description
this.item = this.itemService.item;

  }


  addProductToCart() {

//  // find product by name
//  this.productAdded.emit(item);
//       console.log(item)
    this.itemService.addToCart(this.item)
    this.buttonclicked = "Go To Cart"




    }






}
