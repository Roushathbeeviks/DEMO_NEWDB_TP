import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminLandComponent } from './Admin/admin-land/admin-land.component';
import { AdminSignUpComponent } from './Admin/admin-sign-up/admin-sign-up.component';
import { AssetListComponent } from './Admin/asset-list/asset-list.component';
import { VesselListComponent } from './Vessel/vessel-list/vessel-list.component';
import { VoyagePlanComponent } from './Admin/voyage-plan/voyage-plan.component';
import { ForgotpasswordComponent } from './Users/forgotpassword/forgotpassword.component';
import { LandingPageComponent } from './Users/landing-page/landing-page.component';
import { LoginComponent } from './Users/login/login.component';
import { VesselLandComponent } from './Vessel/vessel-land/vessel-land.component';
import { UserListComponent } from './Admin/user-list/user-list.component';
import { VoyageTableComponent } from './voyage/voyage-table/voyage-table.component';
import {VoyageFormComponent} from './voyage/voyage-form/voyage-form.component'
import { AuthGuardGuard } from './auth-guard.guard';
import { SearchComponent } from './search/search.component';
import { UpdatePasswordComponent } from './Users/update-password/update-password.component';



const routes: Routes = [
{path:'',component:LoginComponent},
{path:'land',component:LandingPageComponent,canActivate:[AuthGuardGuard]},
{path:'adminLand',component:AdminLandComponent,canActivate:[AuthGuardGuard]},
{path:'adminHeader',component:AdminHeaderComponent},
{path:'adminSignUp',component:AdminSignUpComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'voyageplan',component:VoyagePlanComponent},
{path:'usermgt',component:UserListComponent,canActivate:[AuthGuardGuard]},
{path:'AssetList',component:AssetListComponent},
{path:'VesselList',component:VesselListComponent},
{path:'vessel',component:VesselLandComponent},
{path:"voyagetable/:id",component:VoyageTableComponent},
{path:"voyageform/:id",component:VoyageFormComponent},
{path:"search/:query",component:SearchComponent},
{path:"updatepassword",component:UpdatePasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
