import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalableVectorComponent } from './scalable-vector.component';

describe('ScalableVectorComponent', () => {
  let component: ScalableVectorComponent;
  let fixture: ComponentFixture<ScalableVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalableVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalableVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
