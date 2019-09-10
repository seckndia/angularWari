import { Component, OnInit } from '@angular/core';
import { PartService } from '../part.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
retraitData = {};
  constructor(private partService: PartService) { }

  ngOnInit() {
  }
  OnSubmit(data){
    console.log(data)
    this.partService.transactionRetrait(data)
    .subscribe(
    data =>{
      if (data.Messages) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Parametre incorrect!',
          footer: '<a href>code Retirer ou code invalide ?</a>'
        })
      } 
     else{
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Retrait réussie!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
      
    },

    error=>{
   //   console.log(error)

    }
   )
   }
}
