import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainsDetailsComponent } from './vilains-details.component';

describe('VilainsDetailsComponent', () => {
  let component: VilainsDetailsComponent;
  let fixture: ComponentFixture<VilainsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilainsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilainsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
