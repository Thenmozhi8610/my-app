import { AfterViewInit, Component, OnInit, ViewChild ,Inject, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {MatDialog,MAT_DIALOG_DATA,MatDialogTitle,MatDialogContent} from '@angular/material/dialog'
import { DialogDataExampleDialogComponent } from '../useractivate/useractivate.component';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrl: 'list.component.css',
  templateUrl: './list.component.html',
  imports: [MatTableModule, MatPaginatorModule],
})

export class TablePaginationExample implements OnInit {
  displayedColumns: string[] = ['PARTY_NAME', 'PARTY_CODE', 'MOBILE_NUMBER', 'EMAIL_ADDRESS','ACTIVE_CODE','ACTION'];
  name = "Party Name"
  dataSource = new MatTableDataSource<any>()
  length:any="";


  constructor(private apiService:ApiService, private router:Router, private dialog : MatDialog ){}



  @ViewChild(MatPaginator) paginator!:MatPaginator;

   ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator
   }


  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers(){
    const data = {
      entityTypeCode: "API_GW_PARTY",
      filters: [
        {
          key: "activeCode",
          operator: "eq",
          value: "ACTIVE"
        }
      ],
      pagination: {
        pageSize : 1000,
        pageIndex: 0
      },
      sorting: {
        key: "createdOn",
        value: "asc"
      }
    }

 
    this.apiService.postList(data).subscribe({
      next: (res) => {
        this.dataSource.data = res.usersList
        
      },
      error: (err) => {
        console.log(err) 
      }
    })
  }
 

   onClick(element:any){
    this.router.navigate(['/edit'], {queryParams:{ name: element.PARTY_NAME , userId: element.PARTY_CODE, mobileno: element.MOBILE_NUMBER, email: element.EMAIL_ADDRESS}})
   }

   onDelete(element:any){
    this.dataSource.data = this.dataSource.data.filter((item: any) => item.PARTY_NAME !== element.PARTY_NAME);
    console.log(this.dataSource.data);
    
   }

   onActive(data:any){
      const dialogRef = this.dialog.open(DialogDataExampleDialogComponent,{
         data:{
              partyCode:data.PARENT_PARTY_CODE,
              userCode:data.PARTY_CODE,
              statusCode:data.ACTIVE_CODE
         }
      })
        console.log(data);

}

}











