import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdooradventureComponent } from './outdooradventure.component';

describe('OutdooradventureComponent', () => {
  let component: OutdooradventureComponent;
  let fixture: ComponentFixture<OutdooradventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdooradventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdooradventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
