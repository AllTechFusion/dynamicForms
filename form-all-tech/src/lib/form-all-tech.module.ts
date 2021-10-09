import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAllTechComponent } from './form-all-tech.component';

 

@NgModule({
  declarations: [
    FormAllTechComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormAllTechComponent
  ]
})
export class FormAllTechModule { }
