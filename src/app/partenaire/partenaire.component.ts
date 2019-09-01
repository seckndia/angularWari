import { Component, OnInit } from '@angular/core';
import { PartenaireService} from '../partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  imageUrl:string = "/assets/img/default.jpeg" ;
  fileToUpload : File = null;
  constructor(private partService: PartenaireService) { } 

  ngOnInit() {
  }
  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    } 
    reader.readAsDataURL(this.fileToUpload);
      }
      
      OnSubmit(username,password,entreprise,nom,adresse,adresses,tel,tels,cni,profil,ninea,Image){
    this.partService.partFile(
      username.value,
      password.value,
      entreprise.value,
      nom.value,
      adresse.value,
      adresses.value,
      tel.value,
      tels.value,
      cni.value,
      profil.value,
      ninea.value,
      this.fileToUpload).subscribe(
    data =>{
      console.log(data);
      
      username.value = null;
      password.value = null;
      nom.value = null;
      adresse.value = null;
      tel.value = null;
      
      tels.value = null;
      cni.value = null;
      profil.value = null;
      Image.value = null;
      this.imageUrl = "/assets/img/default.jpeg";
    
    },
    error=>console.log(error)
    );
      }


}
