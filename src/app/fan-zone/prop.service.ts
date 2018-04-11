import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bid, NewProp, UsedProp} from '../models/prop';

@Injectable()
export class PropService {

  result: any;
  bidd: Bid;

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
    return this.http.get('/api/KorisceniRekvizit/sve');
  }

  reservation(id: number) {
    return this.http.get('/api/KorisceniRekvizit/reserve/' + id, {observe: 'response'});
  }

  getBids(usedPropId: number) {
    return this.http.get('/api/bids/KorisceniRekvizit/' + usedPropId);
  }

  createBid(usedPropId: number, price: number) {
    const bid = {
      price: price
    };
    return this.http.post('/api/bids/' + usedPropId, bid).subscribe();
  }

  createUsedProp(usedProp: UsedProp) {
    return this.http.post('/api/KorisceniRekvizit', usedProp, {observe: 'response'});
  }


  // ===================================================


}
