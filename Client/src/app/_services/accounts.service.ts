import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null >(null); //User|null is a union type using the pipe key. Can either be of type User or type null. the behaviorsubject observables allows to give an observable an initial value
  currentUser$ = this.currentUserSource.asObservable(); //$ is an observable. 


  constructor(private http: HttpClient) { }

  //Another reason to use services to login, unlike components(which 'forget' what is stored in memory when we are with another component), they are able survive the lifetime of the application.  
  //Chain on the pipe, use the obseravble that comes from the API. RxJs operator uses the data from Api 
  login(model:any){

    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe( 
      map((response : User) => {
        const user = response; 
        if (user){
          localStorage.setItem('user', JSON.stringify(user)) //Cannot store an object in the localstorage. We parse 'user' object into a string using JSON.stringify. Result is a Key:value pair, like user: username&token
          this.currentUserSource.next(user);
        }
      } )
    )
   }

  register(model: any){

    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe( 
      map(user => {
        if (user){
          localStorage.setItem('user', JSON.stringify(user)) //
          this.currentUserSource.next(user);
        }
      })
    )
  }


   setCurrentUser(user: User){
      this.currentUserSource.next(user);
   }
   logout(){
    localStorage.removeItem('user')  // removes item when user actually logsout
    this.currentUserSource.next(null);
   }
}
