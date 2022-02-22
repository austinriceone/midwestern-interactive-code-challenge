import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../features/home/home.component";
import {ContactComponent} from "../features/contact/contact.component";

const routes: Routes = [];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'home'}
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})

export class AppRoutingModule { }
