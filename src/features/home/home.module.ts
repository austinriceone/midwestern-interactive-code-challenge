import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { HomeComponent } from "./home.component";
import { ContentService } from "../../services/content.service";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomeComponent,
    ContactListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ContentService
  ]
})
export class HomeModule { }
