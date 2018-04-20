import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRegKorisnikaComponent } from './profil-reg-korisnika.component';

describe('ProfilRegKorisnikaComponent', () => {
  let component: ProfilRegKorisnikaComponent;
  let fixture: ComponentFixture<ProfilRegKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilRegKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRegKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
