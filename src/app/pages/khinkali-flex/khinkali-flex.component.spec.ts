import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhinkaliFlexComponent } from './khinkali-flex.component';

describe('KhinkaliFlexComponent', () => {
  let component: KhinkaliFlexComponent;
  let fixture: ComponentFixture<KhinkaliFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhinkaliFlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhinkaliFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
