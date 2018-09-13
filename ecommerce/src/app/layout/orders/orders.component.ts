import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from '../../auth.service';

import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private auth: AuthService) {}
  data;
  err;
  totalAmount = 0;
  showPaymentOptions: boolean = false;
  status:string='';

  ngOnInit() {
    this.auth.getOrders().subscribe(data => {
      if (data) {
        this.data = data;
        if (this.data.length > 1) {
          this.showPaymentOptions = true;
        }
        for (let i = 0; i < data.length; i++) {
          this.totalAmount += data[i].productPrice;
        }


      }
    }, err => this.err = err);

  }


  updateOrder(data) 
  {

    console.log(data.id);
    var updates = {
      "productName": data.productName,
      "productPrice": data.productPrice,
      "productDesc": data.productDesc,
      "paid": false,
      "status": this.status
    }
    console.log(updates)
    this.auth.updateOrders(updates, data.id).subscribe(data=>
      {
        if(data)
        {
          this.auth.getOrders().subscribe(data => {
          if (data)
          {
            this.data = data;
            if (this.data.length > 1) {
              this.showPaymentOptions = true;
            }    
          }
        }, err => this.err = err);
        }
      }, err => this.err = err)
  }


}
