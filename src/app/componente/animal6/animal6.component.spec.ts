import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animal6Component } from './animal6.component';

describe('Animal6Component', () => {
  let component: Animal6Component;
  let fixture: ComponentFixture<Animal6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animal6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animal6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
