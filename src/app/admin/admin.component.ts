import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: Object;

  constructor(private data: AuthentificationService) { }

  ngOnInit() {
   
  }
  firstClick() {
    this.data.firstClick();
  }
}
