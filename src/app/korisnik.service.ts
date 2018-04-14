import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Korisnik} from './models/korisnik';
import {error} from 'util';
import {Router} from '@angular/router';

@Injectable()
export class KorisnikService {

  result: any;


  constructor(private http: HttpClient, private router: Router) {
  }

  registerNewUser(korisnik: Korisnik) {
    return this.http.post('api/register', korisnik).subscribe();
  }

  loginUser(email: string, lozinka: string) {
    return this.http.post('api/logIn', {email: email, password: lozinka})
      .subscribe(res => {
          localStorage.setItem('ulogovaniKorisnik', JSON.stringify(res));
          this.router.navigateByUrl('/home-page');
        },
        err => {
          alert('Pogresan email ili lozinka!');
          console.log(err);
        });
  }

  logOut() {
    localStorage.removeItem('ulogovaniKorisnik');
  }
}
