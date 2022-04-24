import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatanddrinkdetailsComponent } from './eatanddrinkdetails.component';

describe('EatanddrinkdetailsComponent', () => {
  let component: EatanddrinkdetailsComponent;
  let fixture: ComponentFixture<EatanddrinkdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatanddrinkdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatanddrinkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
