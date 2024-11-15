import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompletedTasksPageComponent } from './incompleted-tasks-page.component';

describe('IncompletedTasksPageComponent', () => {
  let component: IncompletedTasksPageComponent;
  let fixture: ComponentFixture<IncompletedTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncompletedTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncompletedTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
