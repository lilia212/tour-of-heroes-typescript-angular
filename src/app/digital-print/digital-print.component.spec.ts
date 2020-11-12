import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPrintComponent } from './digital-print.component';

describe('DigitalPrintComponent', () => {
  let component: DigitalPrintComponent;
  let fixture: ComponentFixture<DigitalPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
