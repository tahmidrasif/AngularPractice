import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm:FormGroup;

  ngOnInit(): void {
    const addressGroup= this.fb.group({
      address:['',[
        Validators.required,
        this.CustomValidate
      ]],
      district:'',
      country:['',[
        Validators.required,
        this.customCountry
      ]]
    })
  
   this.userForm= this.fb.group({
    name:['',[
      Validators.required,
      Validators.maxLength(10)
    ]],
    email:['',[
      Validators.required
    ]],
    addressGroup:addressGroup,
    comment:''
   });
  }
  constructor(private fb:FormBuilder,private userService:UserService){

  }
  
  onSubmit(){
    this.userService.InsertUser(this.userForm.value);
    //console.log(this.userForm.value)
  }

  CustomValidate(control: AbstractControl){
    console.log(control.value)
    if (!control.value.includes('dhaka')) {
      return {customAddress:true};
    }
    
      return null;
  }

  customCountry(control: FormControl){
    console.log(control.value)
    if (!control.value.includes('Bangladesh')) {
      return {customCountryError:true};
    }
    
      return null;
  }


}
