import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatanddrinkComponent } from './eatanddrink.component';

describe('EatanddrinkComponent', () => {
  let component: EatanddrinkComponent;
  let fixture: ComponentFixture<EatanddrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatanddrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatanddrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
