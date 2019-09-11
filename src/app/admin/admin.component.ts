import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: Object;

  constructor(private data: AuthentificationService,private navComponent:NavComponent) { }

  ngOnInit() {
  }
 
}
