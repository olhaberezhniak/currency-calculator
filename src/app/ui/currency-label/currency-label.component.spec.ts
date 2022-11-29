import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyLabelComponent } from './currency-label.component';

describe('CurrencyLabelComponent', () => {
  let component: CurrencyLabelComponent;
  let fixture: ComponentFixture<CurrencyLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
