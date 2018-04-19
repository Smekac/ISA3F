///<reference path="shows/shows-cinema/shows-cinema.component.ts"/>
///<reference path="rezervacija-mjesta/rezervacija-mjesta.component.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRouteModule} from './app-route.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FanZoneComponent} from './fan-zone/fanZone.component';
import {UsedPropListComponent} from './fan-zone/korisceni-rekviziti/used-prop-list.component';
import {NewPropListComponent} from './fan-zone/new-prop-list/new-prop-list.component';
import {UsedPropDetailComponent} from './fan-zone/used-prop-detail/used-prop-detail.component';
import {CreateAdComponent} from './fan-zone/create-ad/create-ad.component';
import {BidListComponent} from './fan-zone/bid-list/bid-list.component';
import {NewPropDetailComponent} from './fan-zone/new-prop-detail/new-prop-detail.component';
import {PropService} from './fan-zone/prop.service';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {KorisnikService} from './korisnik.service';
import {HomePageComponent} from './home-page/home-page.component';
import {ProfilFanAdminaComponent} from './fan-zone/profil-fanAdmina/profil-fan-admina/profil-fan-admina.component';
import {NewPropsConfigComponent} from './fan-zone/profil-fanAdmina/new-props-config/new-props-config.component';
import {Heder1Component} from './heder1/heder1.component';
import {ShowsCinemaComponent} from './shows/shows-cinema/shows-cinema.component';
import {CinemaRepertoireComponent} from './shows/shows-cinema/cinema-repertoire/cinema-repertoire.component';
import {NewMovieComponent} from './shows/shows-cinema/cinema-repertoire/new-movie/new-movie.component';
import {PocetnaComponent} from './pocetna/pocetna.component';
import {UsedPropsConfigComponent} from './fan-zone/profil-fanAdmina/used-props-config/used-props-config.component';
import {MyAdsComponent} from './fan-zone/my-ads/my-ads.component';
import {CreateNewPropComponent} from './fan-zone/profil-fanAdmina/create-new-prop/create-new-prop.component';
import {EditNewPropComponent} from './fan-zone/profil-fanAdmina/edit-new-prop/edit-new-prop.component';
import {RezervacijaMjestaComponent} from './rezervacija-mjesta/rezervacija-mjesta.component';
import {LicniPodaciComponent} from './fan-zone/profil-fanAdmina/licni-podaci/licni-podaci.component';
import {PromenaLozinkeComponent} from './fan-zone/profil-fanAdmina/promena-lozinke/promena-lozinke.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material';
import {UstanovaServiceService} from './ustanova-service.service';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FanZoneComponent,
    UsedPropListComponent,
    NewPropListComponent,
    NewPropDetailComponent,
    UsedPropDetailComponent,
    CreateAdComponent,
    BidListComponent,
    RegisterComponent,
    LoginComponent,
    HomePageComponent,
    ProfilFanAdminaComponent,
    NewPropsConfigComponent,
    Heder1Component,
    ShowsCinemaComponent,
    CinemaRepertoireComponent,
    NewMovieComponent,
    PocetnaComponent,
    UsedPropsConfigComponent,
    MyAdsComponent,
    CreateNewPropComponent,
    EditNewPropComponent,
    RezervacijaMjestaComponent,
    LicniPodaciComponent,
    PromenaLozinkeComponent
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRouteModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    BrowserAnimationsModule

  ],
  providers: [PropService,
    KorisnikService,UstanovaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
