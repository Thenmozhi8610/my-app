import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {


   data = {
    partyData: {
      partyCode:"",
      partyName: "",
      emailAddress:"",
      mobileNumber:"" ,
    },
    userData: {
      userId: "",
      firstName: "",
      lastName: "",
      emailAddress:"",
      mobileNumber:""
    }
  }

  constructor(private apiService: ApiService, private router: Router ) { }

  onSubmit(register: NgForm) {

    if (register.valid) {


      this.apiService.postregister(this.data).subscribe({
        next: (res) => {
          alert("registered successfully")
          console.log("data",this.data);
          
        }
        
      })
    }
    console.log(register);
    
  }

}
