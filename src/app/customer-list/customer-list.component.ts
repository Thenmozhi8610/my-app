import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialogsComponent } from '../custactive/custactive.component';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'CustomerListComponent',
  styleUrl: 'customer-list.component.css',
  templateUrl: 'customer-list.component.html',
  standalone: false
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['PARTY_NAME', 'PARTY_CODE', 'EMAIL_ADDRESS', 'ACTIVE_CODE' ,'ACTION'];
  constructor(private apiService:ApiService, private router:Router){}
  dataSource=new MatTableDataSource<any>()
  length:any="";

  dialog = inject(MatDialog)
  

   @ViewChild(MatPaginator) paginator!:MatPaginator;

   ngAfterViewInit():void{
    this.dataSource.paginator=this.paginator
   }

  ngOnInit(): void {
     this.fetchData()
  }

  fetchData(){
    const customerdata = {
      entityTypeCode: "API_GW_PARTY",
      filters: [
        {
          key: "activeCode",
          operator: "eq",
          value: "ACTIVE"
        }
      ],
      pagination: {
        pageSize:1000,
        pageIndex:0
      },
      sorting: {
        key: "createdOn",
        value: "asc"
      }
    }

    this.apiService.customerlist(customerdata).subscribe({
      next:(res)=>{
            this.dataSource.data=res.partiesList
            length=res.partiesList.length
            console.log(length);           
      }
    })
  }

  onEdit(element:any){
     this.router.navigate(['/customeredit'],{queryParams:{name:element.PARTY_NAME,id:element.PARTY_CODE,email:element.EMAIL_ADDRESS,number:element.MOBILE_NUMBER,}})
  }
  onDelete(element:any){
    this.dataSource.data = this.dataSource.data.filter((item: any) => item.PARTY_NAME !== element.PARTY_NAME);
  }


  onActive(element:any){
   this.dialog.open(DialogDataExampleDialogsComponent,
   {
     data:{
      partyCode: element.PARTY_CODE,
      statuscode:element.ACTIVE_CODE
      }
   })
  
  }
 
   
  

}






