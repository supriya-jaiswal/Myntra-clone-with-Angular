import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';
import {ItemserviceService} from '../itemservice.service';

export interface DialogData {
  id:number;
  type:string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItems:any;


  constructor(public dialog: MatDialog, private itemService:ItemserviceService) { }

  openDialog() {
    this.dialog.open(DialogElementsComponent,{
      data:[
        {"id":1,"type":"Westernwear"},
        {"id":2,"type":"Ethnic Wear"},
        {"id":3,"type":"Accessories"},
        {"id":4,"type":"Makeup Products"}



      ]
    });
  }

  ngOnInit() {

    this.cartItems = this.itemService.getCart();

  }

}

