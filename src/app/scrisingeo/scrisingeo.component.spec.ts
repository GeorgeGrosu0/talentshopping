import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrisingeoComponent } from './scrisingeo.component';

describe('ScrisingeoComponent', () => {
  let component: ScrisingeoComponent;
  let fixture: ComponentFixture<ScrisingeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrisingeoComponent]
    });
    fixture = TestBed.createComponent(ScrisingeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
