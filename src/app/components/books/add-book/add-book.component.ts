import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  reg:FormGroup=new FormGroup({
    ISBN: new FormControl<String>(""),
    author: new FormControl<String>(""),
    title: new FormControl<String>(""),
    price: new FormControl<String>(""),
    quantity: new FormControl<String>(""),
  })
  submitted=false;
  book={
    ISBN:"",
    author:"",
    title:"",
    price:"",
    quantity:"",
  };
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.reg=this.formBuilder.group(
      {
        
        ISBN:['',
          [ Validators.required,Validators.minLength(10),Validators.maxLength(10),
            Validators.pattern("^[0-9]*$")
          ]
      ],
      author:['',Validators.required],
      title:['',[Validators.required,Validators.email]],
      price:['',Validators.required],
      quantity:['',Validators.required]
      }
    )
  }

  get f():{[key:string]:AbstractControl}{
    return this.reg.controls;
  }

  onSubmit(){
    console.log("hi");
    this.submitted=true;
    if(this.reg.invalid){
      return;
    }
    console.log(JSON.stringify(this.reg.value,null,2))
  }

}
