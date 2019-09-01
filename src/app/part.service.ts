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
  getPartenaires() {
return this.http.get<any>(this.urlList);
  }

}
