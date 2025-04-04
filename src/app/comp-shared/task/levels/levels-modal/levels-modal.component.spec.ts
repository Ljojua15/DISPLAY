import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsModalComponent } from './levels-modal.component';

describe('LevelsModalComponent', () => {
  let component: LevelsModalComponent;
  let fixture: ComponentFixture<LevelsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
