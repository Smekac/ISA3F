import {Component, Input, OnInit} from '@angular/core';
import {Bid} from '../../models/prop';
import {PropService} from '../prop.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.css']
})
export class BidListComponent implements OnInit {

  @Input() bids: Bid[];

  idKoriscenogRekvizita: number;
  creatorUsedProp: boolean;
  biddingFinished: boolean;

  constructor(private propService: PropService, private router: Router) {
  }

  ngOnInit() {
    this.bids = this.propService.bids;
    this.creatorUsedProp = this.propService.creatorUsedProp;
    // this.aRoute.params.subscribe(params => {
    //   this.idKoriscenogRekvizita = params['id'];
    // });
    this.biddingFinished = this.propService.biddingFinished;
  }

  acceptBid(bidId: number) {
    this.propService.acceptBid(this.idKoriscenogRekvizita, bidId)
      .subscribe(resp => {
        if (resp.status === 204) {
          alert('Uspesno ste izabrali pobednika licitacije : ' + this.idKoriscenogRekvizita);
          // this.router.navigate(['fanpage/my-ads']);
          window.location.reload();
        } else {
          alert('Greska!');
        }
      });
  }

  back() {
    window.history.back();
  }

}
