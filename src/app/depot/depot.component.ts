import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { from } from 'rxjs';
import { PartService} from '../part.service';
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
       alert("Dépot réussit")
      },
      error=> {
        console.log(error);
        console.log(numcompt.value);
        console.log(montant.value);
      }
    );
      }
}

