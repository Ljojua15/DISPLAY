import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsGridComponent } from './levels-grid.component';

describe('LevelsGridComponent', () => {
  let component: LevelsGridComponent;
  let fixture: ComponentFixture<LevelsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
