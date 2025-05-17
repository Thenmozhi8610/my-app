import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {  Router } from '@angular/router'
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiurl = "http://172.16.16.49:7055/v1/trade"

  constructor(private http: HttpClient, private router: Router) { }

  private userDataSubject=new BehaviorSubject<any[]>([])
  userData$ =this.userDataSubject.asObservable();


  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiurl}/signIn`, data)
  }

  logout(data: any): Observable<any> {
    return this.http.post(`${this.apiurl}/signOut`, data)
  }
  

  postregister(data:any):Observable<any>{

    const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });

    return this.http.post(`${this.apiurl}/onboarding/submit`,data, {headers})
  }


   postList(data:any):Observable<any>{
    const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/user/list`,data,{headers})
   }

    editSubmit(data:any):Observable<any>{
      const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/user/modify`,data,{headers})
    }

    customerlist(customerdata:any):Observable<any>{
             const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/customer/list`,customerdata,{headers})
    }

    customerEdit(data:any):Observable<any>{
       const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/customer/modify`,data,{headers})
    }
    
    activateUser(data:any):Observable<any>{
       const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/customer/modify`,data,{headers})
    }

   yesCustomer(data:any):Observable<any>{
       const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/customer/inActive`,data,{headers})
    }

    noCustomer(data:any):Observable<any>{
      const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/customer/active`,data,{headers})
    }

    yesUser(data:any):Observable<any>{
      const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/user/inActive`,data,{headers})
    }

    noUser(data:any):Observable<any>{
      const headers = new HttpHeaders({
      'client_id': "xzXNJFzxNtMvyLIFXCUL1005"
    });
    return this.http.post(`${this.apiurl}/user/active`,data,{headers})
    }
}
