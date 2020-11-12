import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainsListComponent } from './vilains-list.component';

describe('VilainsListComponent', () => {
  let component: VilainsListComponent;
  let fixture: ComponentFixture<VilainsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilainsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
