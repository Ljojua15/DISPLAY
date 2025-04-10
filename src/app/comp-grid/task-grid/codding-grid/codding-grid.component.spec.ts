import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoddingGridComponent } from './codding-grid.component';

describe('CoddingGridComponent', () => {
  let component: CoddingGridComponent;
  let fixture: ComponentFixture<CoddingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoddingGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoddingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
