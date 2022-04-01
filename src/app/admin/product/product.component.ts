import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ProductsService} from "../../services/products.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})


export class ProductComponent implements OnInit {
  categories ?: Category[];
  formProduct: FormGroup | any;
  selectedImage: any = null;
  imageUrl: string = '';
  actionType = "Thêm sản phẩm";
  selected: any;
  @Input() getAllProduct?: Function;

  @ViewChild('uploadFile', {static: true}) public imageDom: ElementRef | undefined


  constructor(private categoryService: CategoryService,
              public dialogRef: MatDialogRef<ProductComponent>,
              private _fb: FormBuilder,
              private storage: AngularFireStorage,
              private productService: ProductsService,
              @Inject(MAT_DIALOG_DATA) public editData: any) {

  }

  ngOnInit(): void {
    this.getAllCategory();
    this.initForm();
    if (this.editData) {
      this.productService.getProductById(this.editData).subscribe((data) => {
        this.actionType = "Sửa sản phẩm " + data.name;
        this.formProduct.patchValue(data);
        this.imageUrl = "" + data.image;
        this.selected = data.category.id;
      })
    }
  }


  getAllCategory() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    })
  }

  initForm() {
    this.formProduct = this._fb.group({
      id: [''],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      category: ['',Validators.required],
      price: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/),
      ])],
      quantity: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/),
      ])],
      weight: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/),
      ])],
      description: [''],
      image: ['']
    })
  }


  onSubmit() {
    const product = {
      id: this.formProduct.value.id,
      name: this.formProduct.value.name,
      price: this.formProduct.value.price,
      quantity: this.formProduct.value.quantity,
      weight: this.formProduct.value.weight,
      description: this.formProduct.value.description,
      image: this.imageUrl,
      category: {
        id: this.formProduct.value.category
      }
    }
    this.productService.createProduct(product).subscribe(
      () => {
        this.formProduct.reset()
        this.dialogRef.close()
      }
    )
  }

  handleImage() {
    this.selectedImage = this.imageDom?.nativeElement.files[0];
    this.uploadFireBase();
  }

  uploadFireBase() {
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges()
        .pipe(
          finalize(
            () => (fileRef.getDownloadURL()
              .subscribe(url => this.imageUrl = url))
          )
        ).subscribe()
    }
  }
}
