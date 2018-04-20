import { Component, OnInit } from '@angular/core';
import {Prijatelj} from '../models/korisnik';
import {KorisnikService} from '../korisnik.service';
import {Ustanova} from '../models/prop';

@Component({
  selector: 'app-prijatelji',
  templateUrl: './prijatelji.component.html',
  styleUrls: ['./prijatelji.component.css']
})
export class PrijateljiComponent implements OnInit {

  spisakPrijatelja: Prijatelj[];
  constructor(private korisnikService: KorisnikService) { }

  ngOnInit() {
    this.korisnikService.getPrijatelji().subscribe(
      (response: Prijatelj[]) => {
        this.spisakPrijatelja = response;
      },
      err => {
        console.log(err);
      });
  }

  prihvati(id:number) {
    this.korisnikService.prihvatiPrijatelji(id).subscribe();
    this.ngOnInit();
  }

  obrisi(id: number) {
    this.korisnikService.obrisiPrijatelji(id).subscribe();
    this.ngOnInit();
  }

}
