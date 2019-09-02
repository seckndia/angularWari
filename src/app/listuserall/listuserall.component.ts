import { Component, OnInit } from '@angular/core';
import { PartService } from '../part.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-listuserall',
  templateUrl: './listuserall.component.html',
  styleUrls: ['./listuserall.component.scss']
})
export class ListuserallComponent implements OnInit {
  users = []
  constructor(private _listService: PartService) { }

  ngOnInit() {
  this._listService.getUsers()
  .subscribe(
    
    res => this.users = res,
    
    err => console.log(err)
  )
  
  }

}
