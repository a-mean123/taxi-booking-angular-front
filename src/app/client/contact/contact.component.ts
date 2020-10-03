import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _auth: AuthService) { }



  contact = {

    name: '',
    email: '',
    subject: '',
    message: ''

  }


alert = false;

  ngOnInit(): void {
  }



  send(){
    this._auth.addContact(this.contact).subscribe(
      res=>{
        this.alert = true;
        this.contact = {

          name: '',
          email: '',
          subject: '',
          message: ''
      
        };
      

        setTimeout(() => {
          this.alert = false;
        }, 3000);
      },
      err=>{

      }
    );
  }

}
