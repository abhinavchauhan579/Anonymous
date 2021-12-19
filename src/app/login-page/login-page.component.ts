import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // Forms initialization
  public textInputsForm: any;

  // Variables initialization
  public hide = true;
  public userData: any;

  constructor(private fb: FormBuilder, private service:SharedService, private router: Router) { }

  ngOnInit(): void {

    this.textInputsForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });

  }

  public checkLogin() {
    const emailValue = this.textInputsForm.controls['email'].value;
    const passwordValue = this.textInputsForm.controls['password'].value;

    this.service.getUserInfo().subscribe(data=>{
      this.userData = data;
      if(this.textInputsForm.invalid) {

      }
      if(emailValue === this.userData.username && passwordValue === this.userData.password) {
        console.log("login successfull !!!!");
        this.service.loggedIn = true;
        this.router.navigateByUrl('customer');
        this.dismissableAlert('success','Logged in Successfully!');
      }
      else {
        this.dismissableAlert('error','Incorret Email or Password');
      }
    });

  }

  public resetForm() {
    this.textInputsForm.reset()
  }

  public dismissableAlert(type: string, message: string) {
    if(type === "success")
      $('#dismissable_alert').html('<div class="alert alert-success alert-dismissible"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>');
    else if(type === "info")
      $('#dismissable_alert').html('<div class="alert alert-info alert-dismissible"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>');
    else if(type === "caution")
      $('#dismissable_alert').html('<div class="alert alert-warning alert-dismissible"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>');
    else if(type === "error")
      $('#dismissable_alert').html('<div class="alert alert-danger alert-dismissible"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>');
  }

}
