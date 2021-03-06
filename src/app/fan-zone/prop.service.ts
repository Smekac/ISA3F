import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bid, NewProp, UsedProp, Ustanova} from '../models/prop';
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
    console.log('Idemooo: ' + showId);
    newProp.adminFan = null;
    newProp.show = null;
    console.log('Uzeo' + showId);
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
    return this.http.get('/api/noviRekvizit/rezervisi/' + id, {observe: 'response'});
  }


  getBids(usedPropId: number) {
    return this.http.get('/api/bids/used-prop/' + usedPropId);
  }

  createBid(usedPropId: number, bidLocal: Bid) {
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

    return this.http.get('api/KorisceniRekvizit/' + usedPropId + '/pirihvacena-ponuda/' + bidId, {observe: 'response'});
  }


  // ===================================================

  getShows() {
    return this.http.get('api/ustanova/sve');
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
    return this.http.get('api/prihvata/' + usedPropId);  // + '?type=approve
  }

  decline(usedPropId: number) {
    return this.http.get('api/odbija/' + usedPropId); // + '?type=decline'
  }

  delete(usedPropId: number) {
    return this.http.delete('api/KorisceniRekvizit/' + usedPropId);
  }

  // ===
  getUsedPropsNotFinished() {
    return this.http.get('/api/KorisceniRekvizit/not-finished');
  }

  nijeZavrsenoZaKorisnika(username: String) {
    return this.http.get('/api/KorisceniRekvizit/nijeZavrsenaZaKorisnika/' + username);
  }

  promenaZaAdmina(korisnik: Korisnik) {
    return this.http.put('/api/promenaAdmina', korisnik);
  }

  // promenaSifre(sifra: String, nova: String) {
  //   return this.http.get('api/promenaSifre/' + sifra + '/nova/' + nova);
  // }

  promenaSifre(korisnik: Korisnik) {
    return this.http.put('api/promenaSifre', korisnik);
  }

  dodajAdminaUstanove(korisnik: Korisnik) {
    return this.http.post('api/sis/adminustanove', korisnik);
  }

  dodajAdminaSis(korisnik: Korisnik) {
    return this.http.post('api/sis/dodavanje', korisnik);
  }

  dodajUstanovu(ustanova: Ustanova) {
    return this.http.post('api/ustanova', ustanova);
  }

  dodajAdminFana(korisnik: Korisnik) {
    return this.http.post('api/kreirajAdminaFan', korisnik);

  }

}
