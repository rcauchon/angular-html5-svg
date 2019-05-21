import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolylinesComponent } from './polylines.component';

describe('PolylinesComponent', () => {
  let component: PolylinesComponent;
  let fixture: ComponentFixture<PolylinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolylinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolylinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
