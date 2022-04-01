import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductComponent} from "../product/product.component";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  constructor(private readonly productsService: ProductsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProduct()
  }


  getAllProduct() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    })
  }


  deleteProduct(id?: number, name?:string) {
    this.productsService.deleteProduct(id).subscribe( () => {
      this.getAllProduct()
    })
  }

  onEdit(id?: number) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    dialogConfig.data = id;
    this.dialog.open(ProductComponent,dialogConfig)
      .afterClosed().subscribe((data) =>{
      if(typeof data != "string")
        this.getAllProduct()
      }
    )
  }

  getProduct(id?: number) {

  }

  onCreate() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(ProductComponent,dialogConfig)
      .afterClosed().subscribe((data) => {
      if(typeof data != "string")
        this.getAllProduct()
    })
  }

}
