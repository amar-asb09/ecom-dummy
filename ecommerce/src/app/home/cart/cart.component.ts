import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) {}

  data;
  err;
  totalAmount = 0;
  itemCount;
  showPaymentOptions: boolean = false;

  ngOnInit() {
    this.auth.getFromCart().subscribe(data => {
      if (data) {
        this.data = data;
        if (this.data.length > 1) {
          this.showPaymentOptions = true;
        }
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].productPrice)
          this.totalAmount += data[i].productPrice;
        }


      }
    }, err => this.err = err);
  }


  removeItem(data) {

    var id = data.id;
    console.log(data.id);
    this.auth.removeFromCart(id).subscribe(data => {
      if (data) {
        this.auth.getFromCart().subscribe(data => {
          if (data) {
            this.totalAmount = 0;
            this.data = data;
            if (this.data.length > 1) {
              this.showPaymentOptions = true;
            }
            for (let i = 0; i < data.length; i++) {
              console.log(data[i].productPrice)
              this.totalAmount += data[i].productPrice;
            }
            if (this.totalAmount == 0) {
              this.showPaymentOptions = false;
            }
          }
        }, err => this.err = err);
      }
    }, err => this.err = err)
  }

  proceed() 
  {
    this.auth.getFromCart().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) 
      {
        console.log(data[i].productName);
        let orderData = {
          "productName": data[i].productName,
          "productPrice": data[i].productPrice,
          "productDesc": data[i].productDesc,
          "paid": false,
          "status": "Ordered"
        }
        this.auth.setOrders(orderData).subscribe(data => 
          {
          if (data) {
            console.log("Order Submitted....")
          }
        }, err => this.err = err)

        this.auth.removeFromCart(data[i].id).subscribe(data => 
          {
          console.log("Deleted....")
        })
      }
    })

    this.router.navigate(['/home/my-orders']);
  }


}
