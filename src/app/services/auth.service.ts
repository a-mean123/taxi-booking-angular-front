import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://127.0.0.1:3000/";

  constructor( private _router: Router, private http: HttpClient) { }



//authentication



loginUser(user) {
  return this.http.post<any>(this.url + 'user/login', user);
}

logoutUser() {
  localStorage.removeItem('token');
  this._router.navigate(['/login']);
}

getToken() {
  return localStorage.getItem('token');
}

loggedIn() {
  return !!localStorage.getItem('token');
}






//contact 

addContact(contact: any){

  
  return this.http.post<any>(this.url + 'contact/addcontact' , contact);


}



getContact(){
  return this.http.get<any>(this.url + 'contact/getcontact');
}


deleteContact(id: any){

  return this.http.delete<any>(this.url + "contact/deletecontact/" +id);

}





//reservation

addReservation(reser: any){

  return this.http.post<any>(this.url + 'reservation/addreservation' , reser);


}

getReservation(){
  return this.http.get<any>(this.url + 'reservation/getreservation');
}


deleteReservation(id: any){

  return this.http.delete<any>(this.url + "reservation/deletereservation/" +id);

}

acceptReservation(id: any){

  return this.http.put<any>(this.url + 'reservation/acceptreservation/' + id, '');
}


refuserReservation(id: any){

  return this.http.put<any>(this.url + 'reservation/refusereservation/' + id, '');
}



}
