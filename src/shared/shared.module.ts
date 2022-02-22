import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingOneComponent } from "./heading-one/heading-one.component";
import { HeadingTwoComponent } from './heading-two/heading-two.component';

@NgModule({
  declarations: [
    HeadingOneComponent,
    HeadingTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadingOneComponent,
    HeadingTwoComponent
  ]
})
export class SharedModule { }
