import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  constructor(private http : HttpClient) { }
  partFile(
   
    username:string,
    password:string,
    entreprise:string,
    nom:string,
    adresse:string,
    adresses:string,
    tel:string,
    tels:string,
    cni:string,
    profil:string,
    ninea:string,
    fileToUpload: File){
    const endpoint = '  http://127.0.0.1:8000/api/ajoutpart';
    const formData: FormData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('entreprise', entreprise)
    formData.append('nom', nom)
    
    formData.append('cni', cni)
    formData.append('profil', profil)
    formData.append('ninea', ninea)
    formData.append('tel', tel)
    formData.append('tel', tels)
    formData.append('adresse', adresse)
    formData.append('adresse', adresses)

   
    formData.append('imageName',  fileToUpload, fileToUpload.name )
    console.log(formData)
    return this.http.post(endpoint, formData)

  }
}
