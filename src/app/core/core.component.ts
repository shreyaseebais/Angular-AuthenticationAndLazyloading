import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  shrinkedNav = false;
  
  constructor() { }

  ngOnInit() {
  }

  shrinkNav(){
    this.shrinkedNav = !this.shrinkedNav;
  }
}
