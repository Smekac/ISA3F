import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewPropDetailComponent} from './fan-zone/new-prop-detail/new-prop-detail.component';

import {FanZoneComponent} from './fan-zone/fanZone.component';
import {UsedPropDetailComponent} from './fan-zone/used-prop-detail/used-prop-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'fan-zone/usedProp/:id', component: UsedPropDetailComponent},
  {path: 'fan-zone/newProp/:id', component: NewPropDetailComponent},
  {path: 'fan-zone', component: FanZoneComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouteModule {


}
