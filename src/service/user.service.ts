import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  InsertUser(form:FormGroup){
    console.log(form);
  }
}
