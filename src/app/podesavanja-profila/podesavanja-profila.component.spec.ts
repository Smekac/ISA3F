import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodesavanjaProfilaComponent } from './podesavanja-profila.component';

describe('PodesavanjaProfilaComponent', () => {
  let component: PodesavanjaProfilaComponent;
  let fixture: ComponentFixture<PodesavanjaProfilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodesavanjaProfilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodesavanjaProfilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
