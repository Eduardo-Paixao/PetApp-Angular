import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animal5Component } from './animal5.component';

describe('Animal5Component', () => {
  let component: Animal5Component;
  let fixture: ComponentFixture<Animal5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animal5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
