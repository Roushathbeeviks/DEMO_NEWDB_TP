import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from "./Users/login/login.component"
import { LandingPageComponent } from './Users/landing-page/landing-page.component';
import { HeaderComponent } from './Users/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminSignUpComponent } from './Admin/admin-sign-up/admin-sign-up.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLandComponent } from './Admin/admin-land/admin-land.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import{MatTableModule} from "@angular/material/table"
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// import {NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
// import { TitleCasePipe } from '@angular/common';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { CarouselModule } from 'ngx-owl-carousel-o';

// import { SwiperModule } from 'swiper/angular';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ForgotpasswordComponent } from './Users/forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { EditprofileComponent } from './Users/editprofile/editprofile.component';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import { VoyagePlanComponent } from './Admin/voyage-plan/voyage-plan.component';
import {MatStepperModule} from '@angular/material/stepper';
import { VoyageFormsComponent } from './Admin/voyage-forms/voyage-forms.component';
import { VesselListComponent } from './Vessel/vessel-list/vessel-list.component';
import { AssetListComponent } from './Admin/asset-list/asset-list.component';
import { VesselHeaderComponent } from './Vessel/vessel-header/vessel-header.component';
import { VesselLandComponent } from './Vessel/vessel-land/vessel-land.component';
import { UserListComponent } from './Admin/user-list/user-list.component';
import { VesselMappingComponent } from './Vessel/vessel-mapping/vessel-mapping.component';
import { VoyageTableComponent } from './voyage/voyage-table/voyage-table.component';
import { VoyageFormComponent } from './voyage/voyage-form/voyage-form.component';
import { VesselEditComponent } from './Vessel/vessel-edit/vessel-edit.component';
import { SearchComponent } from './search/search.component';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FirstCapDirective } from './first-cap.directive';
import { EditVoyageComponent } from './voyage/edit-voyage/edit-voyage.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { CarouselModule } from 'node_modules/ngx-owl-carousel-o';
import { VesselDeleteComponent } from './modal/vessel-delete/vessel-delete.component';
import { VoyageDeleteComponent } from './modal/voyage-delete/voyage-delete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdatePasswordComponent } from './Users/update-password/update-password.component';
import { NoVesselComponent } from './voyage/no-vessel/no-vessel.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    //AdminComponent,
    AdminSignUpComponent,
    //AdminhomeComponent,
    AdminHomeComponent,
    //LandComponent,
    AdminLandComponent,
    AdminHeaderComponent,
    ForgotpasswordComponent,
    LogoutComponent,
    EditprofileComponent,
    VoyagePlanComponent,
    VoyageFormsComponent,
    VesselListComponent,
    AssetListComponent,
    VesselHeaderComponent,
    VesselLandComponent,
    UserListComponent,
    // IvyCarouselModule,
   
    VesselMappingComponent,
    VoyageTableComponent,
    VoyageFormComponent,
    VesselEditComponent,
    SearchComponent,
   
    FirstCapDirective,
         EditVoyageComponent,
         DeleteModalComponent,
         VesselDeleteComponent,
         VoyageDeleteComponent,
         UpdatePasswordComponent,
         NoVesselComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    MatSnackBarModule,
    MatDividerModule,
    CarouselModule,
    NgSelectModule,
    MatSidenavModule
    // AngularFontAwesomeModule
    // Ng2SearchPipeModule,
    // SwiperModule 
 


    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
    // TitleCasePipe
    // SweetAlert2Module.forRoot() 
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
