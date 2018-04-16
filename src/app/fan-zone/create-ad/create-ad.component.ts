import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {UsedProp} from '../../models/prop';
import {PropService} from '../prop.service';
import {Korisnik} from "../../models/korisnik";

const now = new Date();

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  usedProp: UsedProp;
  korisnik: Korisnik;

  constructor(private propService: PropService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

    this.usedProp = new UsedProp();
    this.usedProp.registrovaniKorisnik = this.korisnik;
  }

  ngOnInit() {
  }


  create() {
    this.propService.createUsedProp(this.usedProp)
      .subscribe(
        resp => {
          if ((resp.status === 201) || (resp.status === 200)) {
            alert('Uspesno ste postavili oglas, ceka se potvrda administratora fan zone.');
            window.location.reload();
          }
        },
        err => {
          alert('Greska prilikom kreiranja oglasa, pokusajte ponovo. == ' + this.usedProp.naslov);
        }
      );
  }


}
