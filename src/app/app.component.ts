import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-details';

  constructor(private router:Router){}

  goToNewUser(){
    this.router.navigate(['newUser'])
  }

  goToUserList(){
    this.router.navigate(['userList'])
  }
}
