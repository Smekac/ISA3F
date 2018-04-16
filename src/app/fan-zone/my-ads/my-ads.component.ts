
import {Component, Input, OnInit} from '@angular/core';
import {PropService} from '../prop.service';
import {Router} from '@angular/router';
import {Bid, UsedProp} from '../../models/prop';
import {Korisnik} from '../../models/korisnik';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  usedProps: UsedProp[];
  korisnik: Korisnik;
  // bids: Bid[];       // Kad imamo <app-bid-list [bids]="bids"></app-bid-list>
  usedPropId: number;
  biddingFinished: boolean;
  creatorUsedProp: boolean;

  @Input() bids: Bid[];
 // usedProp: UsedProp;

  idKoriscenogRekvizita: number;

  constructor(private propService: PropService, private router: Router) {
    this.korisnik =  JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
   // this.usedProps =new UsedProp();
  }

  ngOnInit() {
    this.creatorUsedProp = this.propService.creatorUsedProp;
    this.biddingFinished = this.propService.biddingFinished;
    this.getMyAds();
  }

  getMyAds() {
    this.propService.getMyAds(this.korisnik.username)
      .subscribe((response: UsedProp[]) => {
        this.usedProps = response;
      });
  }


  acceptBid(bidId: number) {
        console.log("____________" + this.idKoriscenogRekvizita)
    this.propService.acceptBid(this.idKoriscenogRekvizita, bidId)
      .subscribe(resp => {
        if (resp.status === 204) {
          alert('Uspesno ste izabrali pobednika licitacije');
          // this.router.navigate(['fanpage/my-ads']);
          window.location.reload();
        } else {
          alert('Greska!');
        }
      });
  }

  deleteUsedProp(id: number) {
    this.propService.deleteUsedProp(id)
      .subscribe(resp => {
        if (resp.status === 204) {
          alert('Uspesno obrisan oglas i sve licitacije');
          window.location.reload();
        } else {
          alert('Nije uspelo brisanje oglasa, doslo je do greske.');
        }
      });
  }

  getBids(usedPropId: number, usedPropBid: number) {
    this.idKoriscenogRekvizita = usedPropId;
    if (usedPropBid) {
      this.propService.biddingFinished = true;
    } else {
      this.propService.biddingFinished = false;
    }
    this.propService.getBids(usedPropId).subscribe(
      (data: Bid[]) => {
        this.bids = data;
      },
      (data: Bid[]) => {
        if (data.length === 0) {
          alert('Za odabrani oglas nema ni jedne ponude');
        } else {
          this.propService.bids = data;
          this.propService.creatorUsedProp = true;
        //  this.router.navigate(['/fanpage/used-prop/' + usedPropId + '/bids']);
        }
      },

     // err => console.error(err)
    );
  }


}
