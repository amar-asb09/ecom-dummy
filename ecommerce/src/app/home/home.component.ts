import {
  Component,
  OnInit,
  EventEmitter
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  AuthService
} from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute) {}

  itemCount;
  products;
  err;
  items:number=0;
  addNotify;
  access_token = localStorage.getItem('loginId');
  isLoggedIn = this.auth.isLoggedIn();

  cartItems = [];

  ngOnInit() {
    this.auth.getProductData().subscribe(data => {
      console.log(data);
      this.products = data;
    }, err => this.err = err);
    this.countThem();
  }


  //add user Id for user profile - later
  showProfile() {
    this.router.navigate(['profile'], {
      relativeTo: this.route
    })
  }


  logout() {
    this.auth.getLogOut().subscribe(data => {
      if (data) {
        console.log("logging out.....")
        this.auth.setLogOut(false, "");
        console.log("Success.......")
        this.router.navigate(['/logout']);
      }
    });
  }

  //add new Component for client/ company registration

  registerClient() {


  }
  //add help component
  help() {


  }

  //add my orders component

  myOrders() 
  {
    this.router.navigate(['my-orders'],
    {
      relativeTo:this.route
    })
    window.scrollTo(0,0);


  }
  //add contact us page

  contactUs() {


  }

  // add wishList component
  wishList() {

  }


  recentItems() {


  }

  buyNow(product) {
    if (this.auth.isLoggedIn()) 
    {

      if (product.stock == "No") {
        this.addNotify = "Sorry not available right now!"
      } else {
        this.addToCart(product);
        this.countThem();
      }

    } else {
      this.router.navigate(['/login']);
    }

  }

  addToCart(product) 
  {
    if (this.auth.isLoggedIn()) 
    {

      if (product.stock == "No") 
      {
        this.addNotify = "Sorry not available right now!"
      } else 
      {
        console.log(product.name);
        var cartData = 
        {
          "productName": product.name,
          "productPrice": product.price,
          "productDesc": product.description,
          "paid": false,
        };
        this.auth.saveToCart(cartData).subscribe(data =>
          {
            console.log('Saved Successfully....')
            this.addNotify = product.name + " " + "Added To Cart";
            console.log(data);
            this.countThem();

          },err=>
          this.err = err)
       /* this.auth.getFromCart().subscribe(data => 
          {
          if (data.id===!undefined) 
          {
            console.log("getting data.......")
            console.log(data);
            console.log("Item going to be added To Card : ")
            console.log(product);
            this.cartItems.push(product);
            console.log("Above Item Added To Card");
            console.log("CartItems Value : ")
            console.log(this.cartItems);
            var paid = false;
            var cartValue = 0;;
            for (let i = 0; i < this.cartItems.length; i++) {
              //console.log(this.cartItems[i].price);
              cartValue += this.cartItems[i].price;
            }

            // console.log("Total Price =" + cartValue);

            var dataTosend = {
              "products": this.cartItems,
              "cartValue": cartValue,
              "paid": paid
            }
            console.log("data to be send to server :")
            console.log(dataTosend);
            this.auth.updateCart(dataTosend,data.id).subscribe(data => 
              {
              if (data) 
              {
                console.log(data.id);
                this.addNotify = product.name + " " + "Added To Cart";
                console.log("successfully Sent.....")
                //this.router.navigate(['cart']);
              }
            }, err => this.err = err)


          }
          else
          {
            this.cartItems.push(product);
            console.log("Above Item Added To Card");
            console.log("CartItems Value : ")
            console.log(this.cartItems);
            var paid = false;
            var cartValue = 0;;
            for (let i = 0; i < this.cartItems.length; i++) {
              //console.log(this.cartItems[i].price);
              cartValue += this.cartItems[i].price;
            }

            // console.log("Total Price =" + cartValue);

            var dataTosend = {
              "products": this.cartItems,
              "cartValue": cartValue,
              "paid": paid
            }
            console.log("data to be send to server :")
            console.log(dataTosend);
            this.auth.saveToCart(dataTosend).subscribe(data => 
              {
              if (data) 
              {
                console.log(data.id);
                this.addNotify = product.name + " " + "Added To Cart";
                console.log("successfully Sent.....")
                //this.router.navigate(['cart']);
              }
            }, err => this.err = err)

          }
        }) */

        this.router.navigate(['cart'],
        {
          relativeTo:this.route

        })
        window.scrollY
      }

    } else {
      this.router.navigate(['/login']);
    }

  }
  countThem() {
    this.auth.countCart().subscribe(data => {
      this.itemCount = data;
      console.log(this.itemCount.count);
      this.items=this.itemCount.count;
    })
  }

  goToCart() {
    this.router.navigate(['cart'], {
      relativeTo: this.route
    });
    window.scrollTo(0, 0);
  }

  showProduct(product) {
    this.router.navigate(['product', product.id])

  }

}
