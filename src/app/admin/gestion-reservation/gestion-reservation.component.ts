import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.css']
})
export class GestionReservationComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  reservations: any;


  ngOnInit(): void {



    this._auth.getReservation().subscribe(

      res=>{
        this.reservations = res;
      },
      err=>{
        console.log(err);
        
      }

    );





  }

  
  acceptReservation(id: any){


    this._auth.acceptReservation(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }


  refuserReservation(id: any){


    this._auth.refuserReservation(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );
  }


  delete(id: any){

    this._auth.deleteReservation(id).subscribe(
      res=>{
        this.ngOnInit();
      },
      err=>{
        console.log(err);
        
      }
    );

  }

}
