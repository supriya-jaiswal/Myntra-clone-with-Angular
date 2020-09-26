import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id:number;
  type:string;
}


@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.css']
})
export class DialogElementsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
