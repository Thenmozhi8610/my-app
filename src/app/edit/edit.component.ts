import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  userData = {
    userId: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: ""
  }


  constructor(private apiService: ApiService, private router:ActivatedRoute) { }

  ngOnInit():void{

  this.userData.userId = this.router.snapshot.queryParamMap.get('userId') ?? '';
  const fullname=this.router.snapshot.queryParamMap.get('name')??'';
 this.userData.lastName =  fullname.split(" ")[1];                          
  this.userData.firstName = fullname.split(" ")[0]; 
  this.userData.mobileNumber = this.router.snapshot.queryParamMap.get('mobileno') ?? '';
  this.userData.emailAddress = this.router.snapshot.queryParamMap.get('email') ?? '';
     
  }

  onSubmit(editform: NgForm) {

    const data = {
      actionCode: "update",
      userData: {
        userId:this.userData.userId,
        firstName:this.userData.firstName,
        lastName: this.userData.lastName,
        emailAddress: this.userData.emailAddress,
        mobileNumber: this.userData.mobileNumber,
        parentPartyCode:"ABC"
      }
    }
    this.apiService.editSubmit(data).subscribe({
      next: (res) => {
        console.log(res.data);
      }
    })
  }


}

