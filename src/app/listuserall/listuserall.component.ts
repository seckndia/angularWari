import { Component, OnInit, ViewChild } from '@angular/core';
import { PartService } from '../part.service';

import { from } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-listuserall',
  templateUrl: './listuserall.component.html',
  styleUrls: ['./listuserall.component.scss']
})
export class ListuserallComponent implements OnInit {
  tableau : any;
  dataSource : any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // users = []
  // constructor(private _listService: PartService) { }

  // ngOnInit() {
  // this._listService.getUsers()
  // .subscribe(
    
  //   res => this.users = res,
    
  //   err => console.log(err)
  // )
  
  // }
  bloquerUser(id) {
    if (window.confirm('Vous etes sur de Vouloir bloquer cette utilisateur?')){
      this._listService.bloquerUser(id).subscribe(data => {
        console.log(data)
        this.ngOnInit()
        //window.location.reload()
      })
    }
  } 
  constructor(private _listService: PartService){}
  ngOnInit(){
 this._listService.getUsers().subscribe(
    
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
    displayedColumns: string[] = ['username', 'nom', 'roles', 'cni','tel','adresse','status'];
    
    
      applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
       
  }
}
