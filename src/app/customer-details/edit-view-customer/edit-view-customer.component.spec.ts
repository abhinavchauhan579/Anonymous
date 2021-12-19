import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewCustomerComponent } from './edit-view-customer.component';

describe('EditViewCustomerComponent', () => {
  let component: EditViewCustomerComponent;
  let fixture: ComponentFixture<EditViewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
