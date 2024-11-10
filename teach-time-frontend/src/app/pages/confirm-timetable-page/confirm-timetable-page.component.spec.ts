import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTimetablePageComponent } from './confirm-timetable-page.component';

describe('ConfirmTimetablePageComponent', () => {
  let component: ConfirmTimetablePageComponent;
  let fixture: ComponentFixture<ConfirmTimetablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmTimetablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmTimetablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
