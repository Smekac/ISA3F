import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewPropDetailComponent} from './fan-zone/new-prop-detail/new-prop-detail.component';

import {FanZoneComponent} from './fan-zone/fanZone.component';
import {UsedPropDetailComponent} from './fan-zone/used-prop-detail/used-prop-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NewPropsConfigComponent} from './fan-zone/profil-fanAdmina/new-props-config/new-props-config.component';
import {ShowsCinemaComponent} from './shows/shows-cinema/shows-cinema.component';
import {CinemaRepertoireComponent} from './shows/shows-cinema/cinema-repertoire/cinema-repertoire.component';
import {NewMovieComponent} from './shows/shows-cinema/cinema-repertoire/new-movie/new-movie.component';
import {PocetnaComponent} from './pocetna/pocetna.component';
import {ProfilFanAdminaComponent} from './fan-zone/profil-fanAdmina/profil-fan-admina/profil-fan-admina.component';
import {UsedPropsConfigComponent} from './fan-zone/profil-fanAdmina/used-props-config/used-props-config.component';
import {MyAdsComponent} from './fan-zone/my-ads/my-ads.component';

const routes: Routes = [
  {path: '', redirectTo: '/pocetna', pathMatch: 'full'},
  {path: 'fan-zone/usedProp/:id', component: UsedPropDetailComponent},
  {path: 'fan-zone/newProp/:id', component: NewPropDetailComponent},
  {path: 'fanpage/my-ads', component: MyAdsComponent},

  {path: 'admin-profil', component: ProfilFanAdminaComponent},

  // {path: 'adminfan/noviRekvizit-config', component: NewPropsConfigComponent},

  {path: 'fan-zone', component: FanZoneComponent},
  {path: 'adminfan/noviRekvizit-config', component: NewPropsConfigComponent},
  {path: 'adminfan/used-props-config', component: UsedPropsConfigComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shows/:type', component: ShowsCinemaComponent},
  {path: 'shows/:type/:id', component: CinemaRepertoireComponent},
  {path: 'shows/:type/:id/new-movie', component: NewMovieComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'pocetna', component: PocetnaComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouteModule {


}
