import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthentService {

  constructor(private router: Router, private http: HttpClient) {
  }

  // public jeAutetifikovan(): boolean {
  //   const jwtHelper: JwtHelperService = new JwtHelperService();
  //   const token = localStorage.getItem('token');
  //
  //   if(token) {
  //     return !jwtHelper.is(token);
  //   }
  //
  // }

  // http://tny.im/d9-


}
