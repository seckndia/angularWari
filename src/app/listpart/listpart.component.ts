import { Component, OnInit } from '@angular/core';
import { PartService} from '../part.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-listpart',
  templateUrl: './listpart.component.html',
  styleUrls: ['./listpart.component.scss']
})
export class ListpartComponent implements OnInit {
partenaires = []
  constructor(private _listService: PartService) { }

  ngOnInit() {
  this._listService.getPartenaires()
  .subscribe(
    res => this.partenaires = res,
    err => console.log(err)
  )
  
  }



}
