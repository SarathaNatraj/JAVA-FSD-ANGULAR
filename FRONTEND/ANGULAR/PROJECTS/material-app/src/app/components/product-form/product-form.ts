import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard } from "@angular/material/card";
import { MatError, MatFormField, MatLabel,MatInput } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatOption, MatSelect } from '@angular/material/select';
import { Product } from '../register/types';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.html',
  styleUrls: ['./product-form.css'],
  imports:[CommonModule,ReactiveFormsModule,MatButton,MatCard,MatError,MatFormField,MatInput,MatLabel,MatSelect, MatOption]
})
export class ProductForm  {

  productForm!: FormGroup;
  categories = ['Electronics', 'Books', 'Clothing'];

  constructor(private readonly fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      description: ['']
    });}

  

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product:Product = this.productForm.value;
      console.log(product);
    }
  }
}
