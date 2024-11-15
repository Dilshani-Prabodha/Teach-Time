import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksPageComponent } from './add-tasks-page.component';

describe('AddTasksPageComponent', () => {
  let component: AddTasksPageComponent;
  let fixture: ComponentFixture<AddTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
