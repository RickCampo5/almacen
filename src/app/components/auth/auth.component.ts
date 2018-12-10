import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private activated: ActivatedRoute,
    private router: Router
  ) { }

  user:any = {}
  account:any = {}

  showLogin(){
    this.router.navigate(['/auth', "log"])
  }

  showSignup(){
    this.router.navigate(['auth', "sign"])
  }

  ngOnInit() {
    this.activated.params.subscribe(
      params => {
        this.account = params
      }
    )
  }

}
