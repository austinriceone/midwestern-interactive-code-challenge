import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ContactComponent } from "./contact.component";
import { SharedModule } from "../../shared/shared.module";
import { ContactService } from "./services/contact.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AboutSectionComponent,
    ContactFormComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ], providers: [
    ContactService
  ]
})
export class ContactModule { }
