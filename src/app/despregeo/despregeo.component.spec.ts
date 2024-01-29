import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespregeoComponent } from './despregeo.component';

describe('DespregeoComponent', () => {
  let component: DespregeoComponent;
  let fixture: ComponentFixture<DespregeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespregeoComponent]
    });
    fixture = TestBed.createComponent(DespregeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
