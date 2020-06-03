import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
title = 'little';
  activate= '';
  activate2='';
  serverCreated=false;
  other=false;
  stand=false;

  
  otherFunction(){
    if(this.activate==='') {
      this.other=true;
    }
  }
  standFunction(){
    if(this.serverCreated=true){
      this.stand=true;
    }
  }
    mine(){
      if(this.activate!='admin' && this.activate2 !='admin'){
        this.serverCreated=true;
      }
      if(this.activate==='admin' && this.activate2 ==='admin'){
        this.router.navigate(['/Home']);
      }
    }

     test(){
      if(this.activate===''){
        this.other=true;
      }
    }

   
   
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
