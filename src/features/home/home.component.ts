import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardList: Array<any> = [];

  constructor( private contentService: ContentService ) { }

  ngOnInit(): void {
    this.getCardList();
  }

  getCardList() {
    this.contentService.getContent('home').subscribe((cardList: any) => {
      this.cardList = cardList;
    });
  }

}
