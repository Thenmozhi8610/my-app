import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseractivateComponent } from './useractivate.component';

describe('UseractivateComponent', () => {
  let component: UseractivateComponent;
  let fixture: ComponentFixture<UseractivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseractivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseractivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
