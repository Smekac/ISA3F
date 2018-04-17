import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bid, NewProp, UsedProp} from '../models/prop';
import {error} from 'selenium-webdriver';
import {Korisnik} from '../models/korisnik';

@Injectable()
export class PropService {

  result: any;
  bidd: Bid;

  bids: Bid[];
  creatorUsedProp: boolean;
  biddingFinished: boolean;

  korisnik: Korisnik;
  datum: Date;


  constructor(private http: HttpClient) {

  }

  getNewProps() {
    return this.http.get('/api/noviRekvizit');
  }

  getNewPropsAll() {
    return this.http.get('/api/noviRekvizit/sve');
  }

  getNewProp(noviRekvizitID: number) {
    return this.http.get('/api/noviRekvizit/' + noviRekvizitID);
  }

  editNewProp(newProp: NewProp, showId: number) {
    newProp.adminFan = null;
    newProp.show = null;
    return this.http.put('api/noviRekvizit/' + showId, newProp);
  }

  createNewProp(newProp: NewProp, showId: number) {
    console.log('Uzeo' + showId);
    return this.http.post('api/noviRekvizit/' + showId, newProp, {observe: 'response'});
  }

  deleteNewProp(newPropId: number) {
    return this.http.delete('api/noviRekvizit/' + newPropId, {observe: 'response'});
  }

  // ========================================================

  // getUsedProps() {
  //   return this.http.get('/api/nadjiKorisceniRekvizit');
  // }
  getUsedProps() {
    return this.http.get('/api/KorisceniRekvizit');  // /api/KorisceniRekvizit/sve   Ako hocemo sve i prihvacene i odbijene
  }

  reservation(id: number) {
    return this.http.get('/api/noviRekvizit/reserve/' + id, {observe: 'response'});
  }

  // getBids(usedPropId: number) {
  //   return this.http.get('/api/bids/used-prop' + usedPropId);
  // }
  //
  // createBid(usedPropId: number, price: number) {
  //   const bid = {
  //     price: price
  //   };
  //   return this.http.post('/api/bids/' + usedPropId, bid).subscribe();
  // }


  getBids(usedPropId: number) {
    return this.http.get('/api/bids/used-prop/' + usedPropId);
  }

  createBid(usedPropId: number, bidLocal: Bid) {  //price: number,
    // this.bidd = {
    //   price: price,
    //   registrovaniKorisnik: this.korisnik.username,
    //   dateCreated: this.datum
    // };
    // this.bidd.price = price;
    // this.bidd.dateCreated = this.datum;
    // this.bidd.registrovaniKorisnik = this.korisnik.username;

    return this.http.post('/api/bids/' + usedPropId, bidLocal).subscribe();
  }

  createUsedProp(usedProp: UsedProp) {
    return this.http.post('/api/KorisceniRekvizit/kreirajKorisceniRekvizit', usedProp, {observe: 'response'});
  }                         //  KorisceniRekvizit/kreirajKorisceniRekvizit

  getMyAds(username: String) {
    return this.http.get('api/KorisceniRekvizit/user/' + username);
  }

  deleteUsedProp(id: number) {
    return this.http.delete('api/KorisceniRekvizit/' + id, {observe: 'response'});
  }

  acceptBid(usedPropId: number, bidId: number) {

    return this.http.get('api/KorisceniRekvizit/' + usedPropId + '/accept-bid/' + bidId, {observe: 'response'});
  }


  // ===================================================

  getShows() {
    return this.http.get('api/shows?type=all');
  }

  getUser() {
    const username = localStorage.getItem('username');
    return this.http.get('api/users/by-username?username=' + username);
  }

  editUser(user: Korisnik) {
    return this.http.put('api/users', user, {observe: 'response'});
  }

  changePassword(oldPw: string, newPw: string) {
    return this.http.get('api/users/change-password?oldPw=' + oldPw + '&newPw=' + newPw, {observe: 'response'});
  }

  accept(usedPropId: number) {
    return this.http.get('api/KorisceniRekvizit/accept-decline/' + usedPropId + '?type=approve');
  }

  decline(usedPropId: number) {
    return this.http.get('api/KorisceniRekvizit/accept-decline/' + usedPropId + '?type=decline');
  }

  delete(usedPropId: number) {
    return this.http.delete('api/KorisceniRekvizit/' + usedPropId);
  }

  // ===
  getUsedPropsNotFinished() {
    return this.http.get('/api/KorisceniRekvizit/not-finished');
  }

  nijeZavrsenoZaKorisnika(username: String) {
    return this.http.get('/api/KorisceniRekvizit/nijeZavrsenaZaKorisnika/'+username);
  }



}
