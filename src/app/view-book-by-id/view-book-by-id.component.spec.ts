import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookByIdComponent } from './view-book-by-id.component';

describe('ViewBookByIdComponent', () => {
  let component: ViewBookByIdComponent;
  let fixture: ComponentFixture<ViewBookByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
