import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router, ActivatedRoute
} from '@angular/router';
import {
  FormsModule,
  NgForm
} from '@angular/forms'
import {
  AuthService
} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}
  userName;
  userEmail;
  userPassword;
  userConfPswd;
  serverError;

  ngOnInit() {

  }

  onSubmit() {
    var data = {
      "realm":this.userName,
      "email":this.userEmail,
      "password": this.userPassword
    }

    if(this.userPassword === this.userConfPswd)
    {
    //console.log(data);
    this.authService.userRegister(data).subscribe(data => 
      {
        if(data)
        {
          console.log(data);
          this.router.navigate(['login']);
        }
      }, error => 
      {
        this.serverError = error;
      })
      this.authService.saveProfile(data).subscribe();
    }
    else{
      this.serverError = "Passwords Do Not Match"
    }
  }

}
