import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { AccountsService } from '../_services/accounts.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  // loggedIn = false; 
  
  constructor(public accountsService: AccountsService, private router: Router, 
    private toastr: ToastrService) { }

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
      next: () => this.router.navigateByUrl('/members'),
      error: error => this.toastr.error(error.error),
    })
  }

  logout(){
    this.accountsService.logout ();
    this.router.navigateByUrl('/');

  }

}
