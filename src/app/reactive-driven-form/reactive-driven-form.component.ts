import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    pswd: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ftname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl('', [Validators.required]),
    pin: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  onSubmit(mydata: any) {
    console.log(mydata)
  }
  get email() {
    return this.loginForm.controls;
  }
  get pswd(){
    return this.loginForm.controls;
  }
  get ftname() {
    return this.loginForm.controls;
  }
  get phone(){
    return this.loginForm.controls;
  }
  get city() {
    return this.loginForm.controls;
  }
  get pin(){
    return this.loginForm.controls;
  }


}
