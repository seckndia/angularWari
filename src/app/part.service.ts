import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from './models/partenaire';


@Injectable({
  providedIn: 'root'
})

export class PartService {

  
  constructor(private http: HttpClient) { }
private urlList:string=" http://localhost:8000/api/listpart";
private urlListUers:string= " http://localhost:8000/api/listuser";
private urlListUer:string= " http://localhost:8000/api/listuserpart";
private urlComptAll:string= " http://localhost:8000/api/comptAll";
private urlComptPart:string= " http://localhost:8000/api/listcompt";
private urlInfocompt:string= "  http://127.0.0.1:8000/api/findcompt";
private urlenvoi:string= "  http://127.0.0.1:8000/api/envoi";
private urlretrait:string= " http://127.0.0.1:8000/api/retrait";
private urlbloqueruser:string= " http://127.0.0.1:8000/api/bloquer";
private urlfindcode:string= " http://localhost:8000/api/findcode";

  getPartenaires() {
return this.http.get<any>(this.urlList);
  }
  getUsers() {
    return this.http.get<any>(this.urlListUers);
      }
      getUserparts() {
        return this.http.get<any>(this.urlListUer);
          }
          getComptAll() {
            return this.http.get<any>(this.urlComptAll);
              }
              getCompts() {
                return this.http.get<any>(this.urlComptPart);
                  }

bloquerUser(id){
  const bloquer= 'http://127.0.0.1:8000/api/bloquer/'+id;
  return this.http.post(bloquer,id);
}

bloquerpart(id){
  const bloquer= 'http://127.0.0.1:8000/api/partbloquer/'+id;
  return this.http.get(bloquer,id);
}
            transactionRetrait(retrait){
                    console.log(retrait);
                    return this.http.post<any>(this.urlretrait,retrait);
                  }
      codeRetrait(code){
        console.log(code);
        return this.http.post<any>(this.urlfindcode,code);
      }
                 
   envoie(
   
    agence:string,
    prenomenv:string,
    prenom:string,
    nomenv:string,
    nom:string,
    telenv:string,
    tel:string,
    montant:string){
          const endpoint = ' http://127.0.0.1:8000/api/envoi';
          const formData: FormData = new FormData()
          formData.append('Agence', agence)
          formData.append('prenomEnvoyeur', prenomenv)
          formData.append('prenom', prenom)
          
          formData.append('nomEnvoyeur', nomenv)
          formData.append('nom', nom)
          formData.append('telEnvoyeur', telenv)
          formData.append('tel', tel)
          formData.append('montant', montant)
         
          console.log(formData)
          return this.http.post(endpoint, formData)
    }            
  }      

