import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  genderArr:string[]=['Male','Female'];
  signUpForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'useremail':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('Male')
    });

  }
  onSubmit(){
    console.log(this.signUpForm);
  }

}
