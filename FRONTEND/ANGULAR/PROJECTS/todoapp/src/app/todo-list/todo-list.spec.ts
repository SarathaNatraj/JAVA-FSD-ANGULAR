import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList } from './todo-list';
import { provideZonelessChangeDetection } from '@angular/core';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoList],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
