import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactCaption: string = '';

  constructor( private contentService: ContentService ) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.contentService.getContent('contact').subscribe((data: any) => {
      this.contactCaption = data[0].content;
    });
  }
}
