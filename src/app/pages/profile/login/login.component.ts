import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any
  public user: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
