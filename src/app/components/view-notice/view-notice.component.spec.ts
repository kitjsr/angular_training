import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoticeComponent } from './view-notice.component';

describe('ViewNoticeComponent', () => {
  let component: ViewNoticeComponent;
  let fixture: ComponentFixture<ViewNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
