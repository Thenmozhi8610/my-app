import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignoutComponent } from './signout/signout.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditComponent } from './edit/edit.component';
import { CuseditComponent } from './cusedit/cusedit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogDataExampleDialogComponent } from './useractivate/useractivate.component';
import { DialogDataExampleDialogsComponent } from './custactive/custactive.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    SettingsComponent,
    CrudComponent,
    SignoutComponent,
    EditComponent,
    CuseditComponent,
    CustomerListComponent,
    DialogDataExampleDialogComponent,
    DialogDataExampleDialogsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
