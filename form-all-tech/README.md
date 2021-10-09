# FormAllTech

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation
`npm i @alltechfusion/form --save`

## Use

import { FormAllTechModule } from 'form-all-tech';
add it in imports array of your module

Then ......
In your html implement it as below
 <atf-formAllTech [formData]="formData" 
         (formControlOnChange)="getFormControls($event)"
         (formValue)="getFormValue($event)"
         ></atf-formAllTech> 
It needed JSON in formData , make JSON as per your needs ,follow below format

 formData = {
    buttonName: 'SUBMIT',
    dataArray: [
      {
        head: "input",
        type: "text",
        name: "First Name",
        class: "mainClass",
        placeholder: "Enter First  Name",
        controlName: "fName",

      },
      {
        head: "input",
        type: "text",
        name: "Last Name",
        //  class:"colorClass",
        placeholder: "Enter Last Name",
        controlName: "lName",

      },
      {
        head: "input",
        type: "text",
        name: "Email",
        class: "mainClass",
        placeholder: "Enter Email",
        controlName: "email",


      },
      {
        head: "input",
        type: "number",
        name: "Age",
        class: "mainClass",
        placeholder: "Enter Age",
        controlName: "age",

      },
      {
        head: "select",
        options: ['Car', 'Bike', 'Cycle', 'Truck', 'Plane'],
        name: "Property",
        checkBoxes: ['marathi', 'English', 'Hindi'],
        class: "mainClass",
        controlName: "property",

      },
      {
        head: "input",
        type: "text",
        name: "Password",
        class: "mainClass",
        placeholder: "Enter Password",
        controlName: "password",

      }
    ]
  }

Add fields in given format , all the parameter add as per your need.
getFormControls method  provides controls of form  
getFormValue provides value of form

