import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../../itemservice.service'

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {
image;

  constructor(private itemService : ItemserviceService) { }
  showImage(item){
    this.image = this.itemService.showImage(item)

  }

  items = this.itemService.items;
  ngOnInit() {

  }

}
