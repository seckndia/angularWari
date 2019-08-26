import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationService } from './authentification.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PartService } from './part.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    LoginComponent,
    PartenaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthentificationService, PartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
