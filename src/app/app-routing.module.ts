import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { SuperAdminUserComponent } from './super-admin-user/super-admin-user.component';


const routes: Routes = [ 

{ path: '', component: LoginComponent },

{ path: 'admin',
canActivate: [AuthGuard],
 component: AdminComponent,
 

 },
 { path: 'register', component: SuperAdminUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
