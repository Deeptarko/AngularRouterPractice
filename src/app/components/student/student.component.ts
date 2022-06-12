import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  user:{id:number,name:string}={id:0,name:''};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user={id:this.route.snapshot.params['id'],name:this.route.snapshot.params['name']}
  }
  onSubmit(form:NgForm){
    // console.log('Submitted');
    console.log(form);
    
  }

}
