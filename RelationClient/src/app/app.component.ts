import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { AccountsService } from './_services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  

  title = 'Mboa Connect';
  users: any; 

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
   this.setCurrentUser();
  
  }

  setCurrentUser(){
    // const user: User = JSON.parse(localStorage.getItem('user')!) //!turns off typescript safety. 
    //sets userif there is a user in localstorage
    const userString = localStorage.getItem('user');
    if (!userString) return
    const user: User = JSON.parse(userString); //converts JSONstring into an object
    this.accountService.setCurrentUser(user);
  }
  
}
