import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBookComponent } from './view-all-book.component';

describe('ViewAllBookComponent', () => {
  let component: ViewAllBookComponent;
  let fixture: ComponentFixture<ViewAllBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
