import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navText: string = '';
  currentUrl: string = '';

  navigationRoutes: any = {
    contact: 'home',
    home: 'contact'
  };

  constructor( private router: Router) { }

  ngOnInit(): void {
  this.router.events.subscribe(() => {
    this.currentUrl = this.router.routerState.snapshot.url.toString();
    this.navText = this.navigationRoutes[this.currentUrl.slice(1, this.currentUrl.length)];
  });
  }

  navigate(optRoute?: string) {
    this.router.navigate(['/', optRoute ? optRoute : this.navText]);
  }
}
