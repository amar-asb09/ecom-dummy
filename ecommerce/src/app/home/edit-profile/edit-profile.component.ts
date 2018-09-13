import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService}  from '../../auth.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  statusMsg;
  data;

  ngOnInit() {
  }

  onSubmit(userForm:NgForm)
  {
    this.auth.retrieveProfile().subscribe(data => 
      {
        console.log(data);
        this.data = data;
        
      })
    var data = userForm.value;
    var id = this.data.id;
    console.log(data);
    this.auth.updateProfile(data, id).subscribe(data =>
      {
        if(data)
        {
          this.statusMsg = "Successfully Added";
        }
      },err =>
      {
        this.statusMsg = err;
      })
  }

}
