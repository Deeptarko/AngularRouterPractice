import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show='yes';
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.show=this.show=='yes'?'no':'yes';
  }

}
