import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimetablePageComponent } from './create-timetable-page.component';

describe('CreateTimetablePageComponent', () => {
  let component: CreateTimetablePageComponent;
  let fixture: ComponentFixture<CreateTimetablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTimetablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTimetablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
