import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodotestComponent } from './bodotest.component';

describe('BodotestComponent', () => {
  let component: BodotestComponent;
  let fixture: ComponentFixture<BodotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodotestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should calculate a result', () => {
    let result = component.add(1, 1);
    expect(result).toEqual(2);
    result = component.add(1, 2);
    expect(result).toEqual(3);
  });
});
