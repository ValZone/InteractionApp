import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  

  // loggedIn = false; 
  
  constructor(public accountsService: AccountsService) { }

  ngOnInit(): void {

  }

  // getCurrentUser(){
  //     this.accountsService.currentUser$.subscribe({
  //       next: user => this.loggedIn = !!user, // double exclamation!! changes object user to boolean. 
  //       error: error => console.log(error)
  //     })
  // }

  login(){

    this.accountsService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        // this.loggedIn = true; 
      },
      error: error => console.log(error)  
    })
  }

  logout(){
    this.accountsService.logout ();
    // this.loggedIn = false;
  }

}
