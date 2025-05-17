import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private userDataSubject = new BehaviorSubject<any[]>([]);
  userData$ = this.userDataSubject.asObservable();

  // Method to update the data
  updateData(newData: any) {
    const currentData = this.userDataSubject.value;
    currentData.push(newData);
    this.userDataSubject.next(currentData);
}
}