import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ProductForm } from './product-form';

describe('ProductForm (Zone-less)', () => {
  let component: ProductForm;
  let fixture: ComponentFixture<ProductForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductForm],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductForm);
    component = fixture.componentInstance;

    // In zone-less mode, this must be called manually for initial render
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
