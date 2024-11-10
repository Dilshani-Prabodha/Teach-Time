import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherProfilePageComponent } from './edit-teacher-profile-page.component';

describe('EditTeacherProfilePageComponent', () => {
  let component: EditTeacherProfilePageComponent;
  let fixture: ComponentFixture<EditTeacherProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTeacherProfilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTeacherProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
