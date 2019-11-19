import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBooksAdminComponent } from './view-all-books-admin.component';

describe('ViewAllBooksAdminComponent', () => {
  let component: ViewAllBooksAdminComponent;
  let fixture: ComponentFixture<ViewAllBooksAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBooksAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBooksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
