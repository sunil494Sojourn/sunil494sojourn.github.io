import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdooradventuredetailsComponent } from './outdooradventuredetails.component';

describe('OutdooradventuredetailsComponent', () => {
  let component: OutdooradventuredetailsComponent;
  let fixture: ComponentFixture<OutdooradventuredetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdooradventuredetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdooradventuredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
