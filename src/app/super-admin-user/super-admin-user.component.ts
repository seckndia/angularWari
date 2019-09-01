import { Component, OnInit } from '@angular/core';
import { SupAdUserService } from '../sup-ad-user.service';

@Component({
  selector: 'app-super-admin-user',
  templateUrl: './super-admin-user.component.html',
  styleUrls: ['./super-admin-user.component.scss']
})
export class SuperAdminUserComponent implements OnInit {
imageUrl:string = "/assets/img/default.jpeg" ;
fileToUpload : File = null;


  constructor(private superadminService: SupAdUserService) { }


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
this.superadminService.postFile(
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
