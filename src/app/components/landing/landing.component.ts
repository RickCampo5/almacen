import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { bypassSanitizationTrustStyle } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  account: String;

  log(){
    this.account = "log"
    this.router.navigate(['/auth', this.account])
  }

  sign(){
    this.account = "sign"
    this.router.navigate(['/auth', this.account])
  }

  ngOnInit() {
  }

}
