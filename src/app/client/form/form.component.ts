import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _auth: AuthService) { }


  reservation= {

    name:'',
    email: '',
    phone:'',
    date:'',
    time: '',
    postal:'',
    depart:'',
    destination:'',
    nombre: '',
    etat: '0'



  }

  alert = false;


  ngOnInit(): void {
  }


  reserver(){
    this._auth.addReservation(this.reservation).subscribe(
      res=>{
        this.alert= true;

        this.reservation= {

          name:'',
          email: '',
          phone:'',
          date:'',
          time: '',
          postal:'',
          depart:'',
          destination:'',
          nombre: '',
          etat: '0'
      
      
      
        }

        setTimeout(() => {
          this.alert = false;
        }, 3000);

      },
      err=>{

        console.log(err);
        

      }
    );
  }




}
