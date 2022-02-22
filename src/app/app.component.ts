import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MWI-code-challenge';
  splitBackground: boolean = false;

  constructor( private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      let currentUrl = this.router.routerState.snapshot.url.toString();
      this.splitBackground = currentUrl.slice(1, currentUrl.length) === 'contact'
    })
  }
}
