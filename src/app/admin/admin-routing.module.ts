import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
  {
    path:"",
    component: AdminComponent,
    children: [
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
