import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RezervacijaMjestaComponent} from './rezervacija-mjesta.component';

describe('RezervacijaMjestaComponent', () => {
  let component: RezervacijaMjestaComponent;
  let fixture: ComponentFixture<RezervacijaMjestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RezervacijaMjestaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaMjestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
