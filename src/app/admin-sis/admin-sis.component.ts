import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin-sis',
  templateUrl: './admin-sis.component.html',
  styleUrls: ['./admin-sis.component.css']
})
export class AdminSisComponent implements OnInit {

  currentRate = 8;

  constructor(private router: Router) {

  }


  ngOnInit() {
    // this.router.navigate(['adminsis/admin-ustanove']);
  }


}
