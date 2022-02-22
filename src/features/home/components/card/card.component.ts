import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: any = {};

  imageMap: {[key: string]: any}  = {
  "10/4": "../../../../assets/Talkie.png",
  "Dagnabbit": "../../../../assets/Rabbit.png",
  "Sweet Tators": "../../../../assets/Shield.png"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
