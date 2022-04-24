import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentdetailsComponent } from './entertainmentdetails.component';

describe('EntertainmentdetailsComponent', () => {
  let component: EntertainmentdetailsComponent;
  let fixture: ComponentFixture<EntertainmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
