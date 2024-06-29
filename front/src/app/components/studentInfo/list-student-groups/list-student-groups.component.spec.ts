import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentGroupsComponent } from './list-student-groups.component';

describe('ListStudentGroupsComponent', () => {
  let component: ListStudentGroupsComponent;
  let fixture: ComponentFixture<ListStudentGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStudentGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStudentGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
