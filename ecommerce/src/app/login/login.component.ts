import {
  Component,
  OnInit
}

from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  }

) export class LoginComponent implements OnInit {
  constructor(private authService : AuthService, 
              private router: Router) {}
  email;
  password;
  serverError;
  ngOnInit()
  {
    console.log(this.authService.isLoggedIn());
    if(this.authService.isLoggedIn()==true)
    {
      this.router.navigate(['/home']);
    }

  }
 
  loginUser()
  {
    var data = {
      "email":this.email,
      "password": this.password
    }
    this.authService.getlogin(data).subscribe(data =>
      {
        if(data)
        {
          //console.log(data.id);
          this.router.navigate(['home'])
          this.authService.setLogIn(true, data.id, data.email);
        }
      }, err => {
        this.serverError = err;
      })

  }
}
