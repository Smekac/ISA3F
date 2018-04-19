import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {UsedProp} from '../../models/prop';
import {PropService} from '../prop.service';
import {Korisnik} from '../../models/korisnik';

const now = new Date();

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  usedProp: UsedProp;
  korisnik: Korisnik;


  time = {hour: 13, minute: 30};
  // ======================
  startDate = new Date(2018, 0, 1);
  model: NgbDateStruct;
  date: { year: number, month: number };


  // mytime: Date;

  mytime: Date = new Date();


  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  // ==========================

  constructor(private propService: PropService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

    this.usedProp = new UsedProp();
    this.usedProp.registrovaniKorisnik = this.korisnik;


  }

  ngOnInit() {
  }


  mesec: string;
  dan: string;


  create() {

    // this.usedProp.activeUntil = '18.' +  this.model.month.toString() + '.' + this.model.year.toString() ; // now.getFullYear() + now.getMonth()  + now.getDate();
    // localStorage.setItem('napravljeniRekvizit', JSON.stringify(this.usedProp));

    // if(this.model.day < 10) {
    //   this.model.day = 10 + this.model.day;
    // }
    //
    // if(this.model.month < 10) {
    //   this.model.month = 10+this.model.month;
    // }
    // classify = (input > 0) ? "positive" : "negative";

    this.mesec = (this.model.month < 10) ? '0' + this.model.month.toString() : this.model.month.toString();
    this.dan = (this.model.day < 10) ? '0' + this.model.day.toString() : this.model.day.toString();


    this.usedProp.activeUntil = this.model.year.toString() + '-' + this.mesec + '-' + this.dan.toString() + 'T' + this.time.hour.toString() + ':' + this.time.minute.toString() + ':' + '00Z';   // 'T03:03:30Z'; // 'T03:03:30Z';

    console.log('__________' + this.usedProp.activeUntil + ' ______   _______' + this.usedProp.naslov);


    this.propService.createUsedProp(this.usedProp)
      .subscribe(
        resp => {
          if ((resp.status === 201) || (resp.status === 200)) {
            alert('Uspesno ste postavili oglas, ceka se potvrda administratora fan zone.');
            window.location.reload();
          }
        },
        err => {
          alert('Doslo je do greske, pokusajte ponovo. == ' + this.usedProp.naslov);
        }
      );
  }


}
