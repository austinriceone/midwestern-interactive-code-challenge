import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../../../../services/content.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() cardList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

  }

}
