import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { PartService} from '../part.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
partener = [];
comptAll = [];
  constructor(private comptService: CompteService, private part: PartService) { }

  ngOnInit() {
    this.part.getPartenaires().subscribe(
      res=>{
        console.log(res);
        this.partener=res
    
      }, err=>{
        console.log(err);
      }
    )
    this.part.getComptAll().subscribe(
      res => this.comptAll = res,
      err => console.log(err)
    )
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
