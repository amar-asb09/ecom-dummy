import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from '../auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private auth: AuthService) {}
  data;
  err;
  totalAmount = 0;
  showPaymentOptions: boolean = false;

  ngOnInit() {
    this.auth.getOrders().subscribe(data => {
      if (data) {
        this.data = data;
        if (this.data.length > 1) 
        {
          this.showPaymentOptions = true;
        }
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].productPrice)
          this.totalAmount += data[i].productPrice;
        }


      }
    }, err => this.err = err);

  }


}
