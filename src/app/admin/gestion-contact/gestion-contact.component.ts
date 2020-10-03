import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestion-contact',
  templateUrl: './gestion-contact.component.html',
  styleUrls: ['./gestion-contact.component.css']
})
export class GestionContactComponent implements OnInit {

  constructor(private _auth: AuthService) { }

contacts: any;

  ngOnInit(): void {

    this._auth.getContact().subscribe(
      res=>{
        this.contacts = res;
      },
      err=>{
        console.log(err);
        
      }
    );



  }



delete(id: any){

  this._auth.deleteContact(id).subscribe(
    res=>{
      this.ngOnInit();
    },
    err=>{
      console.log(err);
      
    }
  );

}





}
