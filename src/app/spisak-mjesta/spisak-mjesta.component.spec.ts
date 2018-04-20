import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisakMjestaComponent } from './spisak-mjesta.component';

describe('SpisakMjestaComponent', () => {
  let component: SpisakMjestaComponent;
  let fixture: ComponentFixture<SpisakMjestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpisakMjestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisakMjestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
