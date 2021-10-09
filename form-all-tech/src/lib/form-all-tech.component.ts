import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'atf-formAllTech',
  templateUrl: './form-all-tech.component.html',
  styles: [
  ]
})
export class FormAllTechComponent implements OnInit {
  @Input() formData:any;
  @Output() formControlOnChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  // formData={
  //   buttonName:'SUBMIT',
  //   dataArray:[]
  // }
  
  // this.formData=this.formDataNeeded;
  allTechForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }
  ngDoCheck(): void {
   // console.log("on DO check", this.allTechForm)
    this.formControlOnChange.emit(this.allTechForm);
  }


  ngOnInit(): void {
    this.allTechForm = this.formBuilder.group({ subForms: this.formBuilder.array([]) });
    //this.langauageForm = this.formBuilder.group({ subForms: this.formBuilder.array([]) });
    this.formData.dataArray.map((element: { type: string; controlName: { toString: () => string; }; })=> {
      if( element.type != 'checkBox'){
        this.allTechForm.addControl(element.controlName.toString(), new FormControl('', Validators.required));
      }
      // else if(element.type == 'checkBox'){
      //   let chekBoxControlName=element.controlName;
      //   chekBoxControlName : this.addCheckBoxControls()
      // }
      
    })

  }


// addCheckBoxControls(){
//   debugger
//   let arr: any[] | undefined=[];
//   this.formData.dataArray.map(_el=>{
    
//     if(_el.type == 'checkBox'){
//      arr= _el.checkBoxes?.map(_checkOpt=>{
// return this.formBuilder.control(false);
//       })
//     }
//   })
//   return this.formBuilder.array(arr);
// }


// public get checkBoxesArray()  {
//   return <FormArray>this.allTechForm.get('chekBoxControlName');
// }


  getClass(i: any) {
    var _className = i.class;
    let classFlag = _className == undefined || _className == null || _className == '' ? false : true;
    return classFlag ? _className : '';
  }
  

  // this.formData.dataArray.map(element => {
  // })
//   checkItem(event:any) // need to check whether our form contains check box or not
//   {
// console.log(event.target)
// if(event.target.checked){

// }
  // }
  onSubmit() {
    console.log(this.allTechForm.value)
    this.submitted = true;
    this.formValue.emit(this.allTechForm.value)
    // if (this.allTechForm.invalid) {
    //   return;
    // }
    
  }

}
