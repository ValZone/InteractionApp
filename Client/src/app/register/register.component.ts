import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountsService: AccountsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountsService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error =>{
        this.toastr.error(error.error)
        console.log(error)
      } 
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
