import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfectcomptComponent } from './afectcompt.component';

describe('AfectcomptComponent', () => {
  let component: AfectcomptComponent;
  let fixture: ComponentFixture<AfectcomptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfectcomptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfectcomptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
