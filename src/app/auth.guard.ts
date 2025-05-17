import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('token'); // Example logic
    if (!isAuthenticated) {
      alert('Access Denied! Redirecting to Login...');
      this.router.navigate(['/','login']);
      return false;
    }
    return true;
  }
};


