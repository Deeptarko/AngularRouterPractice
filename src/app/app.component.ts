import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouterPractice';

  constructor(private router:Router){};

  homeClickHandler(){
    this.router.navigate(['']);
  }
  serverClickHandler(){
    this.router.navigate(['server']);
  }
  studentClickHandler(){
    this.router.navigate(['student']);
  }

}
