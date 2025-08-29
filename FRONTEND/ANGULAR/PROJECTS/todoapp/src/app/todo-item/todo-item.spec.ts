import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItem } from './todo-item';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TodoItem', () => {
  let component: TodoItem;
  let fixture: ComponentFixture<TodoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItem],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItem);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
