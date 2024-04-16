import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo-2/hijo-2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HijoComponent, Hijo2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HijoComponent, Hijo2Component
  ]
})
export class HijosModule { }
