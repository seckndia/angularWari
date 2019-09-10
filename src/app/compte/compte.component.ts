import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { PartService} from '../part.service';
import Swal from 'sweetalert2'



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
      res => {this.comptAll = res
                this.ngOnInit()},
      err => console.log(err)
    )
  }

  OnSubmit(partenaire){
    this.comptService.compteFile(
      partenaire.value).subscribe(
    data =>{
      console.log(data);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Compte Ajouter',
        showConfirmButton: false,
        timer: 1500
      })
      
      partenaire.value = null;
   
    
    },
    error=>console.log(error)
    );
      }
}
