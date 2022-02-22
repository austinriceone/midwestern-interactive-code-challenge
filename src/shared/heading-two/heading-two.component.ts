import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-two',
  templateUrl: './heading-two.component.html',
  styleUrls: ['./heading-two.component.scss']
})
export class HeadingTwoComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
