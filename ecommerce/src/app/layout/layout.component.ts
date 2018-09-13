import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private authService : AuthService,) {}

  ngOnInit() {}

  public flag = true;

  toogleNav() {
    if (this.flag) {
      this.openNav();
      this.flag = false;
    } else {
      this.closeNav();
      this.flag = true;
    }

  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "260px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }



  showDashboard() {

    this.router.navigate(['dashboard'], {
      relativeTo: this.route
    });
   
  }

  showCustomers() {
    this.router.navigate(['customers'], {
      relativeTo: this.route
    })
  }
  addProducts() 
  {
    this.router.navigate(['products'], {
      relativeTo: this.route
    })
  }

  showRevenue() {
    this.router.navigate(['revenue'], {
      relativeTo: this.route
    })
  }

  showIssues() {
    this.router.navigate(['issues'], {
      relativeTo: this.route
    })
  }
  showReports() {
    this.router.navigate(['bugs'], {
      relativeTo: this.route
    })
  }
  showNotification() {
    this.router.navigate(['notification'], {
      relativeTo: this.route
    })
  }

  showStats() {
    this.router.navigate(['statistics'], {
      relativeTo: this.route
    })
  }

  showOrder() {
    this.router.navigate(['orders'], {
      relativeTo: this.route
    })
  }
  showSetting() {
    this.router.navigate(['settings'], {
      relativeTo: this.route
    })
  }

  logout()
  {
    this.authService.getLogOut().subscribe(data =>
      {
        if(data)
        {
          console.log("logging out.....")
          this.authService.setLogOut(false,"");
          console.log("Success.......")
          this.router.navigate(['/logout']);

        }

      });
  }


}
