import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'myapp';
  constructor(public _authService: AuthentificationService){}


  ngOnInit() {
  }
  isAdmin(){
    return this._authService.isAdmin()
  }
  isSuperAdmin(){
   return this._authService.isSuperAdmin()
 }
 isUser(){
   return this._authService.isUser()
 }
 isCaissier(){
   return this._authService.isCaissier()
 }
 isAthenticated(){
  return this._authService.isAuthenticated() 
 }
}
