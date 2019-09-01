import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  imageUrl:string = "/assets/img/default.jpeg" ;
  fileToUpload : File = null;
  constructor(private userService: UtilisateurService) { } 

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
      
      OnSubmit(username,password,nom,adresse,tel,cni,profil,Image){
    this.userService.userFile(
      username.value,
      password.value,
      nom.value,
      adresse.value,
      tel.value,
      cni.value,
      profil.value,
      this.fileToUpload).subscribe(
    data =>{
      console.log(data);
      
      username.value = null;
      password.value = null;
      nom.value = null;
      adresse.value = null;
      tel.value = null;
      cni.value = null;
      profil.value = null;
      Image.value = null;
      this.imageUrl = "/assets/img/default.jpeg";
    
    },
    error=>console.log(error)
    );
      }

}
