import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil-fan-admina',
  templateUrl: './profil-fan-admina.component.html',
  styleUrls: ['./profil-fan-admina.component.css']
})
export class ProfilFanAdminaComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['adminfan/noviRekvizit-config']);
  }

}
