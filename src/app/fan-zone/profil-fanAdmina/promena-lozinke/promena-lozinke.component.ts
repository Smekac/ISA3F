import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PropService} from '../../prop.service';
import {Korisnik} from '../../../models/korisnik';
import {error} from 'util';
@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  korisnik: Korisnik;

  constructor(private route: Router, private propService: PropService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

  }

  potvrdi_promenu(trenutna: string, nova1: string, nova2: string) {

    console.log('uslo !!!!!!!');
    if (trenutna === this.korisnik.password) {
      console.log('2 2 2 2 2 2 2 2 2');
      if (nova1 !== nova2) {

        // sdocument.findElementById('err3').innerHTML() = '';
        // document.getElementById('#err3').innerHTML = '<p style="color: red" > Ponovite novu sifru </p> ';
        alert('Ukucajte ponovo novu sifru posto niste dobro ponovili sifre');
      } else {
        this.korisnik.password = nova1;
        alert('Uslooo ' + this.korisnik.password + '  ___ ' + this.korisnik.username + '  username = ' + this.korisnik.username + ' ' + this.korisnik);
        //      console.log('3 3 3 3 3 3 33 ');
        this.propService.promenaSifre(this.korisnik).subscribe();
        window.history.back();

      }

    } else {
      alert('Ukucajte ponovo vasu trenutnu sifru');
      // document.getElementById('#err1').innerHTML = '<p style="color: red" > Unesite trenutnu sifru</p> ';

    }

  }


  ngOnInit() {

  }


}
