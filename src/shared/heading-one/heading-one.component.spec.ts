import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingOneComponent } from './heading-one.component';

describe('HeadingOneComponent', () => {
  let component: HeadingOneComponent;
  let fixture: ComponentFixture<HeadingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
