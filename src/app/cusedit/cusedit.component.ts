import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cusedit',
  standalone: false,
  templateUrl: './cusedit.component.html',
  styleUrl: './cusedit.component.css'
})


export class CuseditComponent implements OnInit{
 
  partyData={
    partyCode: "",
    partyName: "",
    emailAddress: "",
    mobileNumber: ""
  }

  constructor(private apiService:ApiService , private router:ActivatedRoute){}
  onSubmit(editform:NgForm){
   const data= {
   actionCode: "update",
   partyData: {
    partyCode:this.partyData.partyCode,
    partyName:this.partyData.partyName ,
    emailAddress:this.partyData.emailAddress,
    mobileNumber:this.partyData.mobileNumber 
   }
 }
  this.apiService.customerEdit(data).subscribe({
    next:(res)=>{
      console.log(res.partyData);  
    }
  })
  }
  ngOnInit(): void {
  this.partyData.partyName=this.router.snapshot.queryParamMap.get('name')??'',
  this.partyData.partyCode=this.router.snapshot.queryParamMap.get('id')??'',
  this.partyData.emailAddress=this.router.snapshot.queryParamMap.get('email')??'',
  this.partyData.mobileNumber=this.router.snapshot.queryParamMap.get('number')??''
  }
  

}
