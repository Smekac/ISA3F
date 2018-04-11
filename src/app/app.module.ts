import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
    BidListComponent
  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRouteModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PropService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
