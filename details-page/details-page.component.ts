import { Component, OnInit } from '@angular/core';
import {JSONPlaceholderService}from'../service/jsonplaceholder.service';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  data:Array<any>
  

  constructor(private jSONService: JSONPlaceholderService
              
    ) { 
    
  }

  ngOnInit(): void {
    
  }
  
  
  
 

}
