import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  error = ""
  constructor(private apiService: ApiService, private router: Router) { }

  onClick() {
    let tokens = localStorage.getItem('token')
    let newToken = {
      apiAccessSessionToken: `Bearer ${tokens}`
    }
    this.apiService.logout(newToken).subscribe({
      next: (res) => {
        alert("Signout Successfully")
        localStorage.removeItem('token')
        this.router.navigate(['/', 'login'])
      },
      error: (err) => {
        this.error = "Something went wrong"
        console.log(this.error);

      }
    })
  };

  onAuth(){
    console.log("auth triggered");
    
  };
}
