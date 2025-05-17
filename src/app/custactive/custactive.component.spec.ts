import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustactiveComponent } from './custactive.component';

describe('CustactiveComponent', () => {
  let component: CustactiveComponent;
  let fixture: ComponentFixture<CustactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
