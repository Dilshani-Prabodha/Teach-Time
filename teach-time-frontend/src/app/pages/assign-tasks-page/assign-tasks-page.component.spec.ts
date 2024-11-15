import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTasksPageComponent } from './assign-tasks-page.component';

describe('AssignTasksPageComponent', () => {
  let component: AssignTasksPageComponent;
  let fixture: ComponentFixture<AssignTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
