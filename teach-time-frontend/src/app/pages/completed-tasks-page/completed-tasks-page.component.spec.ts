import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTasksPageComponent } from './completed-tasks-page.component';

describe('CompletedTasksPageComponent', () => {
  let component: CompletedTasksPageComponent;
  let fixture: ComponentFixture<CompletedTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
