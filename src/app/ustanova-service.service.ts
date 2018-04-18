import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UstanovaServiceService {

  constructor(private http: HttpClient) { }

  getUstanove(){
   return this.http.get('api/ustanova/sve');
  }

  getRepertoar(id: number) {
   return this.http.get( 'api/ustanova/' + id + '/repertoar');
  }
}
