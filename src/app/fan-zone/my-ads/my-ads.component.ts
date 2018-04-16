
import {Component, OnInit} from '@angular/core';
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

  constructor(private propService: PropService, private router: Router) {
    this.korisnik =  JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

  }

  ngOnInit() {
    this.getMyAds();
  }

  getMyAds() {
    this.propService.getMyAds(this.korisnik.username)
      .subscribe((response: UsedProp[]) => {
        this.usedProps = response;
      });
  }

  deleteUsedProp(id: number) {
    this.propService.deleteUsedProp(id)
      .subscribe(resp => {
        if (resp.status === 204) {
          alert('Uspesno obrisan oglas i sve licitacije');
        } else {
          alert('Nije uspelo brisanje oglasa, doslo je do greske.');
        }
      });
  }

  getBids(usedPropId: number, usedPropBid: number) {
    if (usedPropBid) {
      this.propService.biddingFinished = true;
    } else {
      this.propService.biddingFinished = false;
    }
    this.propService.getBids(usedPropId).subscribe(
      (data: Bid[]) => {
        if (data.length === 0) {
          alert('Za odabrani oglas nema ni jedne ponude');
        } else {
          this.propService.bids = data;
          this.propService.creatorUsedProp = true;
          this.router.navigate(['/fanpage/used-prop/' + usedPropId + '/bids']);
        }
      },
      err => console.error(err)
    );
  }


}
