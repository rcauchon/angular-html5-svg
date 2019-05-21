import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedCornersComponent } from './rounded-corners.component';

describe('RoundedCornersComponent', () => {
  let component: RoundedCornersComponent;
  let fixture: ComponentFixture<RoundedCornersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedCornersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
