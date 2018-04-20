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

    this.http.get('api/logOut').subscribe();
    localStorage.removeItem('ulogovaniKorisnik');

  }

  getPrijatelji() {
   return this.http.get('/api/prijatelji');
  }

  prihvatiPrijatelji(id: number) {
    return this.http.get('api/prijateljstvo/prihvati/'+ id);
  }

  obrisiPrijatelji(id: number) {
    return this.http.get('api/prijateljstvo/obrisi/'+id);
  }

  promeniPodatke(korisnik:Korisnik) {
    return this.http.put('api/updateRegPosetilac', korisnik);
  }

  posaljiZahtjev(id:number) {
    return this.http.get('api/prijateljstvo/zahtjev'+ id);
  }
}
