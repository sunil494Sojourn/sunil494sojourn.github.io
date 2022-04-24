import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabindetailsComponent } from './cabindetails.component';

describe('CabindetailsComponent', () => {
  let component: CabindetailsComponent;
  let fixture: ComponentFixture<CabindetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabindetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
