import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  constructor() { }

  @Input() bodega;

  addActive = false;

  showAddComponent(){
    this.addActive = true
  }

  hideAddComponent(){
    this.addActive = false
  }

  ngOnInit() {
    this.addActive = false
  }

}
