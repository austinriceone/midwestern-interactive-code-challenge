import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactList: Array<any> = [
    {
      contact1: 'Matt Johnson',
      contact2: 'Bart Paden',
      contact3: 'Ryan Doss',
      contact4: 'Jared Malcolm'
    },
    {
      contact1: 'Matt Johnson',
      contact2: 'Bart Paden',
      contact3: 'Jordan Heigle',
      contact4: 'Tyler Viles'
    }
  ];

  resultingList = [];

  constructor( private toastr: ToastrService ) {

  }

  ngOnInit(): void {
  }

  removeDupes() {
    if (this.resultingList.length > 0) this.toastr.error('The names are already displayed!');
    this.resultingList = this.contactList.reduce((newList, currList) => {
      Object.keys(currList).forEach((key) => {
        if (!newList.find((name: string) => {return name === currList[key]})) {
          newList.push(currList[key]);
        }
      });
      return newList
    }, [])
  }
}
