import {Component, Input, OnInit} from '@angular/core';
import {Bid} from '../../models/prop';
import {PropService} from '../prop.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

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

  // dataSource: Array<number> ;


  constructor(private propService: PropService, private router: Router) {
    // this.dataSource = new Array<number>();
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


  // displayedColumns = ['position', 'Korisnik', 'Cena', 'Datum'];
  // dataSource = new MatTableDataSource(this.bids);


  // applyFilter(filterValue: string) {
  //   // for(let bid of this.bids ) {
  //   //   this.dataSource.push(bid.price);  // += bid.registrovaniKorisnik.username;
  //   // }
  //
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

}  // Kraj ove klase !!!!

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
