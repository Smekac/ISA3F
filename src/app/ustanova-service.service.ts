import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UstanovaServiceService {

  constructor(private http: HttpClient) {
  }

  getUstanove() {
    return this.http.get('api/ustanova/sve');
  }

  getBioskopi() {
    return this.http.get('api/ustanova/bioskop');
  }
  getPozorista() {
    return this.http.get('api/ustanova/pozoriste');
  }

  getRepertoar(id: number) {
    return this.http.get('api/ustanova/' + id + '/repertoar');
  }
}
