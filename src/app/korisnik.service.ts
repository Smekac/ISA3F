import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Korisnik} from './models/korisnik';

@Injectable()
export class KorisnikService {

  result: any;


  constructor(private http: HttpClient) { }

  registerNewUser(korisnik:Korisnik) {
    return this.http.post('api/register',korisnik ).subscribe();
  }
}
