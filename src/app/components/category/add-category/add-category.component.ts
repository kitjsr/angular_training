import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  
  reg:FormGroup=new FormGroup({
    name: new FormControl<String>(""),
     })
  submitted=false;
  
  category={
    name:"",
    
  };
  constructor(private formBuilder: FormBuilder, private categoryService:CategoryService){}
  ngOnInit(){
    this.reg=this.formBuilder.group(
      {
        name:['',Validators.required],
      }
    )
  }

  get f():{[key:string]:AbstractControl}{
    return this.reg.controls;
  }

  onSubmit(){
    console.log("hi");
    this.categoryService.create(this.reg.value)
    .subscribe(reg=>
    {
      console.log("Successfullly added")
    })
    this.submitted=true;
    if(this.reg.invalid){
      return;
    }
    console.log(JSON.stringify(this.reg.value,null,2))
  }


}
