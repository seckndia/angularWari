import { Component, OnInit } from '@angular/core';
import { PartService } from '../part.service';
import {CompteService } from '../compte.service';
@Component({
  selector: 'app-afectcompt',
  templateUrl: './afectcompt.component.html',
  styleUrls: ['./afectcompt.component.scss']
})
export class AfectcomptComponent implements OnInit {
  
  compts= [];
  users = [];
  numcompts = [];
  constructor( private part: PartService,
    private comptService: CompteService,) { }

  ngOnInit() {
    this.part.getCompts().subscribe(
      res=>{
       
        this.numcompts=res
        console.log(res);
    
      }, err=>{
        console.log(err);
      }
    )
    this.part.getUserparts().subscribe(
      res => this.users = res,
      err => console.log(err)
    )
  }

  OnSubmit(user,numcompt){
    this.comptService.affectCompt(
      user.value,
      numcompt.value).subscribe(
    data =>{
      console.log(data);
      
      user.value = null;

      numcompt.value = null;
    },
    error=>console.log(error)
    );
      }

}
