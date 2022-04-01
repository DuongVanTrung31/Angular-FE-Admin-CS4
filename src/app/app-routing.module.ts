import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminModule} from "./admin/admin.module";

const routes : Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.component').then(m => AdminModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
