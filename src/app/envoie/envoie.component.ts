import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PartService } from '../part.service';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.scss']
})
export class EnvoieComponent implements OnInit {

  constructor(private partService: PartService) { }

  ngOnInit(){}
  OnSubmit(agence,prenomenv,prenom,nomenv,nom,telenv,tel,montant){
    this.partService.envoie(
      agence.value,
      prenomenv.value,
      prenom.value,
      nomenv.value,
      nom.value,
      telenv.value,
      tel.value,
      montant.value)
    .subscribe(
    data =>{
      console.log(data);
      
      agence.value =null;
      prenomenv.value =null;
      prenom.value =null;
      nomenv.value =null;
      nom.value =null;
      telenv.value =null;
      tel.value =null;
      montant.value =null;
     
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Envoi réussie!!!',
        showConfirmButton: false,
        timer: 1500
      })
      
    
    },

    error=>{
      console.log(error)
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Parametre incorrect!',
        footer: '<a href>Saisir les bons identifiant ?</a>'
      })
    }
   )
   }

   


}
