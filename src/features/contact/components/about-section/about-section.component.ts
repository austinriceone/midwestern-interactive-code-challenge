import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  @Input() contactCaption: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
