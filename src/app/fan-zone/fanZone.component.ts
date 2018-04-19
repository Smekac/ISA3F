import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsedProp} from '../models/prop';
import {NewProp} from '../models/prop';
import {Router} from '@angular/router';


@Component({
  selector: 'app-fanzone',
  templateUrl: './fanZone.component.html',
  styleUrls: ['./fanZone.component.css']
})
export class FanZoneComponent implements OnInit {
  newProps: UsedProp[];
  usedProps: UsedProp[];
  newProp: NewProp;
  usedProp: UsedProp;
  id: number;

  constructor(private http: HttpClient, private router: Router) {

  }

  getMyAds() {
    this.router.navigate(['fanpage/my-ads']);
  }

  // tiles = [
  //   {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'}
  // ];

  ngOnInit() {


  }


}

