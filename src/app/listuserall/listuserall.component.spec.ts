import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserallComponent } from './listuserall.component';

describe('ListuserallComponent', () => {
  let component: ListuserallComponent;
  let fixture: ComponentFixture<ListuserallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
