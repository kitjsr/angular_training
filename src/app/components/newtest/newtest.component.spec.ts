import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtestComponent } from './newtest.component';

describe('NewtestComponent', () => {
  let component: NewtestComponent;
  let fixture: ComponentFixture<NewtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewtestComponent]
    });
    fixture = TestBed.createComponent(NewtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
