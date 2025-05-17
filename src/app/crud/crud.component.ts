import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: false,
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})


export class CrudComponent {

  orgcode = ""
  loginid = ""
  password = ""
  error = ""

  constructor(private apiService: ApiService, private router: Router) { }

  onsubmit(login: NgForm) {
    console.log(login.valid);

    if (login.valid) {
      
      const data = {
        orgCode: this.orgcode,
        loginId: this.loginid,
        keyword: this.password
      }

      console.log();
      

      this.apiService.postData(data).subscribe({
        next: (res) => {
          alert("login successfully");
          let withOutBearer = res.session.apiAccessSessionToken.split(" ")[1];
          localStorage.setItem('token', withOutBearer || '')
          this.router.navigate([''])
          console.log(res.session);
          

        },
        error: (err) => {
          this.error = "Invalid Credentials"
          console.log(this.error)
        }
      })
    }
  }
}
