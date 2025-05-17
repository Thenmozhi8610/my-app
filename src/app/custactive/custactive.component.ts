import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { NgForm, NgModel } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'custactive.component.html',
  standalone: false
})

export class DialogDataExampleDialogsComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  ngOnInit(): void {
    console.log(this.data);
  }
  reason = ""

  constructor(private apiService: ApiService) { }

  onSubmit(custactive: NgForm) {

    if (this.data.statuscode == "ACTIVE") {
      const custdata = {
        partyCode: this.data.partyCode,
        reason: this.reason
      }
      this.apiService.yesCustomer(custdata).subscribe({
        next: (res) => {
        }
      })
    }
    else
    {
       const custdata = {
        partyCode: this.data.partyCode,
        reason: this.reason
      }
      this.apiService.noCustomer(custdata).subscribe({
        next:(res)=>{

        }
      })
    }
  }
}
