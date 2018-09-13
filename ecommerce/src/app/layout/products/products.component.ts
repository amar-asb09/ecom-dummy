import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private auth:AuthService, private route : Router) { }


  statusMsg;
  product;
  err;
  isEdit=false;
  itemId;
  itemName;
  itemPrice;
  itemDesc;
  ngOnInit() {
    this.auth.getProductData().subscribe(data =>
      {
        console.log(data);
        this.product = data;
      }, err => this.err = err);
  }

  onSubmit(productForm:NgForm)
  {
    var data = productForm.value;
    this.auth.saveProduct(data).subscribe(data =>
      {
        if(data)
        {
          this.statusMsg = "Successfully Added";
          console.log("SuccessFully Added....")
          this.auth.getProductData().subscribe(data =>
            {
              console.log(data);
              this.product = data;
            }, err => this.err = err);
        }
      },err =>
      {
        this.statusMsg = err;
      })

  }

  deleteItem(product)
  {
    console.log(product.id);
    this.auth.deleteProduct(product.id).subscribe(data=>
      {
        if(data)
        {
          this.statusMsg="deleted Successfully!";
          this.auth.getProductData().subscribe(data =>
            {
              console.log(data);
              this.product = data;
            }, err => this.err = err);
        }
      },err=>
      {
        this.statusMsg=err;
      })

      this.isEdit =false;
  }


  makeEdit(product)
  {
    this.itemId = product.id;
    this.itemName =product.name;
    this.itemPrice =product.price;
    this.itemDesc =product.description
    console.log(product.id);
    this.isEdit=true;
    window.scrollTo(0,180);

  }
  updateItem(productForm : NgForm)
  {
    var id = this.itemId;
    this.itemId = null;
    this.isEdit=false;
    console.log(id);
    var data = productForm.value;
    this.auth.updateProduct(data,id).subscribe(data =>
      {
        if(data)
        {
          this.statusMsg="Updated Successfully!";
          this.auth.getProductData().subscribe(data =>
            {
              console.log(data);
              this.product = data;
            }, err => this.err = err);

            console.log(this.itemId, this.isEdit);
        }
      },err=>
      {
        this.statusMsg=err;
      })
  }

}
