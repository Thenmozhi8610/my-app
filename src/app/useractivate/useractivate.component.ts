import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'useractivate.component.html',
  standalone: false
})
export class DialogDataExampleDialogComponent implements OnInit {
  datas = inject(MAT_DIALOG_DATA);
  reason = ""

  ngOnInit(): void {
    console.log(this.datas);
  }


  constructor(private apiService: ApiService,private router:Router) { }


  onSubmit(custactive: NgForm) {
    if (this.datas.statusCode == "ACTIVE") {
      const data = {
        partyCode: this.datas.partyCode,
        userCode: this.datas.userCode,
        reason: this.reason
      }
      this.apiService.yesUser(data).subscribe({
        next: (res) => {
          console.log(res.message);
        }
      })
    }
    else if( this.datas.statusCode == "IN_ACTIVE" ) {
      const data = {
        partyCode: this.datas.partyCode,
        userCode: this.datas.userCode,
        reason: this.reason
      }
      this.apiService.noUser(data).subscribe({
        next: (res) => {
          console.log(res.message);
        }
      })
    }

  }

   

}
