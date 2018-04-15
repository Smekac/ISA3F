import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilFanAdminaComponent} from './profil-fan-admina.component';

describe('ProfilFanAdminaComponent', () => {
  let component: ProfilFanAdminaComponent;
  let fixture: ComponentFixture<ProfilFanAdminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilFanAdminaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFanAdminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
