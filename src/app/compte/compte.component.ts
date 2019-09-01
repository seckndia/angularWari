import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  constructor(private comptService: CompteService) { }

  ngOnInit() {
  }

  OnSubmit(partenaire){
    this.comptService.compteFile(
      partenaire.value).subscribe(
    data =>{
      console.log(data);
      
      partenaire.value = null;
   
    
    },
    error=>console.log(error)
    );
      }
}
