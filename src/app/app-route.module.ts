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

const routes: Routes = [
  {path: 'fan-zone/usedProp/:id', component: UsedPropDetailComponent},
  {path: 'fan-zone/newProp/:id', component: NewPropDetailComponent},
  {path: 'fan-zone', component: FanZoneComponent},
  {path: 'adminfan/new-props-config', component: NewPropsConfigComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shows/:type', component: ShowsCinemaComponent},
  {path: 'shows/:type/:id', component: CinemaRepertoireComponent},
  {path: 'shows/:type/:id/new-movie', component: NewMovieComponent},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouteModule {


}
