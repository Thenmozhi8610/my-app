import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CrudComponent } from './crud/crud.component';
import { HeaderComponent } from './header/header.component';
import { TablePaginationExample } from './list/list.component';
import {CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { CuseditComponent } from './cusedit/cusedit.component';



const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'register', component: BlogComponent },
      { path:'userlist', component : TablePaginationExample},
      {path:'customerlist',component: CustomerListComponent},
      {path:'edit',component:EditComponent},
      {path:'customeredit',component:CuseditComponent}
    ]
  },
  {path: 'login', component: CrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
