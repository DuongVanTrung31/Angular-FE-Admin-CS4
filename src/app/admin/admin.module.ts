import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NavbarComponent} from './navbar/navbar.component';
import {CustomersComponent} from './customers/customers.component';
import {AdminComponent} from './admin.component';
import {OrdersComponent} from './orders/orders.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import { ProductComponent } from './product/product.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    CustomersComponent,
    AdminComponent,
    OrdersComponent,
    ProductListComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  entryComponents:[ProductComponent]
})
export class AdminModule {
}
