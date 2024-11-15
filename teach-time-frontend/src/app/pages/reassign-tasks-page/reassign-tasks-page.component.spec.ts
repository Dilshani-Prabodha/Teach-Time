import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignTasksPageComponent } from './reassign-tasks-page.component';

describe('ReassignTasksPageComponent', () => {
  let component: ReassignTasksPageComponent;
  let fixture: ComponentFixture<ReassignTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReassignTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReassignTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
