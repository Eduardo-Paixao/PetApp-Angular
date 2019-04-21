import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animal4Component } from './animal4.component';

describe('Animal4Component', () => {
  let component: Animal4Component;
  let fixture: ComponentFixture<Animal4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animal4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
