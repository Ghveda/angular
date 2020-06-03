import { Component, OnInit } from '@angular/core';
import{JSONPlaceholderService}from'../service/jsonplaceholder.service';
import {Router}from'@angular/router';
import {MenuItem} from 'primeng/api';
import{ContextMenu}from'primeng/contextmenu/contextmenu';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data:Array<any>
  test1:ContextMenu[];
  items1: MenuItem[];   
  items2: MenuItem[];
  otherDiv=document.getElementById('modelOne');
  private contextMenu: MenuItem[];
  selectedRows: Array<any>
  allTimesheetData: Array<any>;
  activate=false;
  local=true;
  
  constructor(private JSONplaceholder: JSONPlaceholderService,
    private router:Router
    
    ) {
  
   }
  
  
  ngOnInit(): void {
   this.getDataFromApp()
   
}
  

  activation(){
    this.items1 = [
      {
          label: 'Details',
         command: path=>this.router.navigate(['/DetailsPage'])
      },
      {
          label: 'Delete',
         command:METHODS=>this.delete
      }
      
  ]; 
    }
  
    
  details(selectedRows: any){
    console.log(JSON.stringify(selectedRows));
  }
  delete(selectedRows: any){
    this.allTimesheetData = this.allTimesheetData.filter((row)=>{
      return !selectedRows.includes(row);
    })
  }
  getDataFromApp(){
    this.JSONplaceholder.getData().subscribe((data)=>
    this.data=data
    )
  }
  
  show(){
    return this.otherDiv.style.display = 'block';
  }
  
  localDis(){
    return this.local=false;
  }
  
  
    
 
  
  }
  

  
 
 

