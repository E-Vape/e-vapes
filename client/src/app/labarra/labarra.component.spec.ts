import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabarraComponent } from './labarra.component';

describe('LabarraComponent', () => {
  let component: LabarraComponent;
  let fixture: ComponentFixture<LabarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
