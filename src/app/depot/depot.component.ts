import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { from } from 'rxjs';
import { PartService} from '../part.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  infocompts = []
  constructor( private comptService: CompteService,
    private _listService: PartService) { }

  ngOnInit() {
   // this._listService.getInfocompts()
    //.subscribe(
      
     // res => this.infocompts = res,
    //  
     // err => console.log(err)
   // )
  }
  OnSubmit(montant,numcompt) {
    this.comptService.depot(
      numcompt.value,montant.value)
    .subscribe(
      data =>{
        console.log(data);
       //window.location.reload();
       Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Dépots réussit',
        showConfirmButton: false,
        timer: 1500
      })
      },
      error=> {
        console.log(error);
        console.log(numcompt.value);
        console.log(montant.value);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Parametre incorrect!',
          footer: '<a href>Veiller revoir les données ?</a>'
        })
      }
    );
      }
}

