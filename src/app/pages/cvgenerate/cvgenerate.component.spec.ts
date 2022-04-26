import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvgenerateComponent } from './cvgenerate.component';

describe('CvgenerateComponent', () => {
  let component: CvgenerateComponent;
  let fixture: ComponentFixture<CvgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvgenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
