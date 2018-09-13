import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from'@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private auth : AuthService) { }
  //userModel = new User();


  statusMsg;
  data;
  edit;
  ngOnInit() 
  {
    this.auth.retrieveProfile().subscribe(data => 
      {
        console.log(data);
        this.data=data;
    })
  }

  openEdit()
  {
    this.router.navigate(['/home/editProfile'])
  }
}
