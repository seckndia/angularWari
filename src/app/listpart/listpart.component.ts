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
  bloquerpart(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this._listService.bloquerpart(id).subscribe(data => {
        console.log(data)
        this.ngOnInit()
        //window.location.reload()
      })
    }
  }


}
