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
import {RezervacijaMjestaComponent} from './rezervacija-mjesta/rezervacija-mjesta.component';
import {CreateNewPropComponent} from './fan-zone/profil-fanAdmina/create-new-prop/create-new-prop.component';
import {EditNewPropComponent} from './fan-zone/profil-fanAdmina/edit-new-prop/edit-new-prop.component';
import {LicniPodaciComponent} from './fan-zone/profil-fanAdmina/licni-podaci/licni-podaci.component';
import {PromenaLozinkeComponent} from './fan-zone/profil-fanAdmina/promena-lozinke/promena-lozinke.component';
import {AdminSisComponent} from './admin-sis/admin-sis.component';
import {AdminUstanoveComponent} from './admin-sis/admin-ustanove/admin-ustanove.component';
import {CreateAdComponent} from './fan-zone/create-ad/create-ad.component';
import {CreateUstanovaComponent} from './admin-sis/create-ustanova/create-ustanova.component';
import {AdminsisAddComponent} from './admin-sis/adminsis-add/adminsis-add.component';
import {AdminfanAddComponent} from './admin-sis/adminfan-add/adminfan-add.component';
import {ProfilRegKorisnikaComponent} from './profil-reg-korisnika/profil-reg-korisnika.component';
import {BioskopiComponent} from './bioskopi/bioskopi.component';
import {PozoristaComponent} from './pozorista/pozorista.component';
import {PrijateljiComponent} from './prijatelji/prijatelji.component';
import {PodesavanjaProfilaComponent} from './podesavanja-profila/podesavanja-profila.component';
import {SpisakMjestaComponent} from './spisak-mjesta/spisak-mjesta.component';

const routes: Routes = [
  {path: '', redirectTo: '/pocetna', pathMatch: 'full'},
  {path: 'fan-zone/usedProp/:id', component: UsedPropDetailComponent},
  {path: 'fan-zone/newProp/:id', component: NewPropDetailComponent},
  {path: 'fanpage/my-ads', component: MyAdsComponent},

  {path: 'admin-profil', component: ProfilFanAdminaComponent},
  // {path: 'adminfan/dodajTematskiRekvizit', component: CreateNewPropComponent},
  {path: 'adminfan/adminfan/noviRekvizit', component: CreateNewPropComponent},
  {path: 'adminfan/licni-podaci', component: LicniPodaciComponent},
  {path: 'adminfan/promena-lozinke', component: PromenaLozinkeComponent},
  {path: 'adminsis/admin-sis', component: AdminSisComponent},
  {path: 'adminsis/admin-ustanove', component: AdminUstanoveComponent},
  {path: 'adminsis/create-ustanova', component: CreateUstanovaComponent},
  {path: 'adminsis/adminsis-add', component: AdminsisAddComponent},
  {path: 'adminsis/adminfan-add', component: AdminfanAddComponent},

  {path: 'adminfan/edit-new-prop/:id', component: CreateNewPropComponent},  // EditNewPropComponent
  {path: 'adminfan/used-props-config', component: UsedPropsConfigComponent},
  {path: 'fan-zone', component: FanZoneComponent},
  {path: 'adminfan/noviRekvizit-config', component: NewPropsConfigComponent},
  {path: 'adminfan/used-props-config', component: UsedPropsConfigComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shows/:type', component: ShowsCinemaComponent},
  {path: 'shows/:type/:id', component: CinemaRepertoireComponent},
  {path: 'shows/:type/:id/new-movie', component: NewMovieComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'rezervacija-mjesta', component: RezervacijaMjestaComponent},
  {path: 'profil-reg-korisnika', component: ProfilRegKorisnikaComponent},
  {path: 'bioskopi', component: BioskopiComponent},
  {path: 'pozorista', component: PozoristaComponent},
  {path: 'prijatelji', component: PrijateljiComponent},
  {path: 'podesavanja-profila', component: PodesavanjaProfilaComponent},
  {path: 'spisak-rezervisanih', component: SpisakMjestaComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouteModule {


}
