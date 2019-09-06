import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationService } from './authentification.service';
import { PartService } from './part.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SuperAdminUserComponent } from './super-admin-user/super-admin-user.component';
import { from } from 'rxjs';
import { SupAdUserService } from './sup-ad-user.service';
import { ListpartComponent } from './listpart/listpart.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurService } from './utilisateur.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PartenaireService } from   './partenaire.service';
import { CompteComponent } from './compte/compte.component';
import { CompteService } from './compte.service';
import { AfectcomptComponent } from './afectcompt/afectcompt.component';
import { ListuserallComponent } from './listuserall/listuserall.component';
import { ListuserComponent } from './listuser/listuser.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoieComponent } from './envoie/envoie.component';
import { RetraitComponent } from './retrait/retrait.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    LoginComponent,
   
    SuperAdminUserComponent,
   
    ListpartComponent,
   
    UtilisateurComponent,
   
    PartenaireComponent,
   
    CompteComponent,
   
    AfectcomptComponent,
   
    ListuserallComponent,
   
    ListuserComponent,
   
    DepotComponent,
   
    EnvoieComponent,
   
    RetraitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthentificationService, AuthGuard,SupAdUserService,CompteService, PartenaireService, UtilisateurService, PartService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
