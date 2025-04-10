import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsModalGridComponent } from './levels-modal-grid.component';

describe('LevelsModalGridComponent', () => {
  let component: LevelsModalGridComponent;
  let fixture: ComponentFixture<LevelsModalGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelsModalGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsModalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
