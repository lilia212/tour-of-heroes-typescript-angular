import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainsEditComponent } from './vilains-edit.component';

describe('VilainsEditComponent', () => {
  let component: VilainsEditComponent;
  let fixture: ComponentFixture<VilainsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilainsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilainsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
