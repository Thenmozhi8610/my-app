import { Component, inject } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
//   //  we are going to store our data in data
//    data:any    
//   constructor(private http: HttpClient){}
//   ngOnInit():void{}
//   fetchData(){
//     // whatever the data we getting through the api we need to catch for that purporse we are using subscribe
//     this.http.getData("").subscribe((response:any)=>{
//       this.data=response;
//     })
//   }

//   posting:any[]=[]
//   postObj:any={
//     orgcode:"",
//     login:"",
//     password:""
//   }
//   http=inject(HttpClient)
//   postData(){
//     this.http.getData().subscribe((response:any)=>{
//       this.posting=response
//     })
//   }


  

}
