import { Component, OnInit, ViewChild } from '@angular/core';
import { PartService} from '../part.service';
import { from } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listpart',
  templateUrl: './listpart.component.html',
  styleUrls: ['./listpart.component.scss']
})
export class ListpartComponent implements OnInit {
//partenaires = []
tableau : any;
dataSource : any;
@ViewChild(MatPaginator) paginator: MatPaginator;

bloquerpart(id) {
  if (window.confirm('Vous etes sur de Vouloir bloquer le part?')){
    this._listService.bloquerpart(id).subscribe(data => {
      console.log(data)
      this.ngOnInit()
      //window.location.reload()
    })
  }
}

constructor(private _listService: PartService){}
ngOnInit(){
this._listService.getPartenaires().subscribe(
  
  res => {
console.log(res)
this.tableau = res
this.dataSource = new MatTableDataSource(this.tableau);
this.dataSource.paginator = this.paginator;

  },
  
  err =>{

  console.log(err)
} 
)
  }
  displayedColumns: string[] = ['entreprise', 'adresse','tel','status'];
  
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
     
}

}



