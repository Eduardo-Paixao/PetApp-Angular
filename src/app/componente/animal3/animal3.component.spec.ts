import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animal3Component } from './animal3.component';

describe('Animal3Component', () => {
  let component: Animal3Component;
  let fixture: ComponentFixture<Animal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
