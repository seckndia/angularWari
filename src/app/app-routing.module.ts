import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { SuperAdminUserComponent } from './super-admin-user/super-admin-user.component';
import { ListpartComponent } from './listpart/listpart.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { CompteComponent } from './compte/compte.component';
import { AfectcomptComponent } from './afectcompt/afectcompt.component';


const routes: Routes = [ 

{ path: '', component: LoginComponent },

{ path: 'admin',
canActivate: [AuthGuard],
 component: AdminComponent,

 },
 { path: 'register', component: SuperAdminUserComponent },
 { path: 'listpart', component: ListpartComponent },
 { path: 'users', component: UtilisateurComponent },
 { path: 'partenaire', component: PartenaireComponent },
 { path: 'compte', component: CompteComponent },
 { path: 'afectcompt', component: AfectcomptComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
