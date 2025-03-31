import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtsvadiGridComponent } from './mtsvadi-grid.component';

describe('MtsvadiGridComponent', () => {
  let component: MtsvadiGridComponent;
  let fixture: ComponentFixture<MtsvadiGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtsvadiGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtsvadiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
