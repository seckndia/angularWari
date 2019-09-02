import { Component, OnInit } from '@angular/core';
import { PartService } from '../part.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  userparts = []
  constructor(private _listService: PartService) { }

  ngOnInit() {
  this._listService.getUserparts()
  .subscribe(
    
    res => {
      this.userparts = res
    },
      err => console.log(err)
    
  )
  
  }

}
