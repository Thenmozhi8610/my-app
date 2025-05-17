import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuseditComponent } from './cusedit.component';

describe('CuseditComponent', () => {
  let component: CuseditComponent;
  let fixture: ComponentFixture<CuseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuseditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
