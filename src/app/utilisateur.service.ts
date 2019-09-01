import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }
  userFile(
   
    username:string,
    password:string,
    nom:string,
    adresse:string,
    tel:string,
    cni:string,
    profil:string,
    fileToUpload: File){
    const endpoint = ' http://127.0.0.1:8000/api/ajoutpartuser';
    const formData: FormData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('nom', nom)
    
    formData.append('cni', cni)
    formData.append('profil', profil)
    formData.append('tel', tel)
    formData.append('adresse', adresse)
   
    formData.append('imageName',  fileToUpload, fileToUpload.name )
    console.log(formData)
    return this.http.post(endpoint, formData)

  }
}
