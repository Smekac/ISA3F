import {Component, OnInit} from '@angular/core';
import {PropService} from '../prop.service';
import {Bid, UsedProp} from '../../models/prop';
import {Korisnik} from '../../models/korisnik';


@Component({
  selector: 'app-used-prop-list',
  templateUrl: './used-prop-list.component.html',
  styleUrls: ['./used-prop-list.component.css']
})
export class UsedPropListComponent implements OnInit {
  public isCollapsed = false;
  usedProps: UsedProp[];
  bids: Bid[];
  selectedProp: number;

  price: number;

  korisnik: Korisnik;
  bidd: Bid;
  datum: Date;

  constructor(private propService: PropService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    this.datum = new Date;
    this.bidd = new Bid();
  }

  ngOnInit() {
    // this.propService.getUsedProps().subscribe(
    //   (data: UsedProp[]) => {
    //     this.usedProps = data
    //   },
    //   err => console.error(err),
    //   () => console.log('Uspesno ucitani polovni rekviziti')
    // );
    this.getUsedProps();
  }

  // getBids(usedPropId: number) {
  //   this.propService.getBids(usedPropId).subscribe(
  //     (data: Bid[]) => {
  //       this.bids = data
  //     },
  //     err => console.error(err),
  //     () => console.log('Uspesno ucitane ponude za rekvizit' + usedPropId)
  //   );
  //   this.selectedProp = usedPropId;
  //   console.log('selektovana' + this.selectedProp);
  // }
  //
  // getBidColl(usedPropId: number) {
  //   this.getBids(usedPropId);
  //   this.isCollapsed = !this.isCollapsed;
  // }
  //
  // createBid() {
  //   this.propService.createBid(this.selectedProp, this.price);
  //   this.isCollapsed = !this.isCollapsed;
  //   this.getBids(this.selectedProp);
  // }

  // =========================

  getUsedProps() {
    this.propService.getUsedProps().subscribe(
      (data: UsedProp[]) => {
        this.usedProps = data;
      },
      err => console.error(err),
      () => console.log('Uspesno ucitani polovni rekviziti')
    );
  }

  getBids(usedPropId: number) {
    this.propService.getBids(usedPropId).subscribe(
      (data: Bid[]) => {
        this.bids = data;
      },
      err => console.error(err),
      () => console.log('Uspesno ucitane ponude za rekvizit' + usedPropId)
    );
    this.selectedProp = usedPropId;
    console.log('selektovana' + this.selectedProp);
  }

  getBidColl(usedPropId: number) {
    this.getBids(usedPropId);
    this.isCollapsed = !this.isCollapsed;
  }

  createBid1() {
    console.log('cENA JE: ' + this.price + ' A datum je: ' + this.datum + '    A korisnik je: ' + this.korisnik.username);

    this.bidd.price = this.price;
    // this.bidd.dateCreated = this.datum; // Ne saslje dobro kad ga ovde setujem
    this.bidd.registrovaniKorisnik = this.korisnik;
    console.log('cENA JE: ======================' + this.bidd.price);

    this.propService.createBid(this.selectedProp, this.bidd);
    this.isCollapsed = !this.isCollapsed;
    this.getBids(this.selectedProp);
  }

}
