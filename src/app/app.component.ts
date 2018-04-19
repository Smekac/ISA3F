import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  mobHeight: any;
  mobWidth: any;

  ngOnInit() {
    this.mobHeight = (window.screen.height) + 'px';
    this.mobWidth = (window.screen.width) + 'px';
    console.log(this.mobHeight);
    console.log(this.mobWidth);
    // document.getElementById('sredina').innerHTML = '<div style="height: 80px;width: this.mobWidth/2">I hajmo cela diskoteka </div>';


  }

}
