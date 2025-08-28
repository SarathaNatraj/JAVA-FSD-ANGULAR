import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDemo } from './material-demo';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MaterialDemo', () => {
  let component: MaterialDemo;
  let fixture: ComponentFixture<MaterialDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDemo],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
