import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heder1',
  templateUrl: './heder1.component.html',
  styleUrls: ['./heder1.component.css']
})
export class Heder1Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  // navigateTheatre(){
  //   this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
  //     this.router.navigate(['shows/theatre']));
  // }
  //
  // navigateCinema(){
  //   this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
  //     this.router.navigate(['shows/cinema']));
  // }

}
