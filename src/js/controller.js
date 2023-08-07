"use strict";
import * as model from './model.js'
import todoView from './views/todoView.js';
import addTodoView from './views/addTodoView.js';
import previewView from './views/previewView.js';
import progressView from './views/progressView.js';
import doneView from './views/doneView.js';
import { catTodos } from './helpers.js'; 

const controlShowTodo = function() {
  const todos = catTodos();
  console.log(todos);
  todoView.render(todos.todo); 
  progressView.render(todos.progress);
  doneView.render(todos.done);
};

const controlAddTodo = function() {
  const todo = addTodoView.getTodo() 
  model.todos.push(todo);
  console.log(model.todos);
  const todos = catTodos();
  todoView.render(todos.todo); 
  progressView.render(todos.progress);
  doneView.render(todos.done);
};

const init = function() {
  previewView.addHandlerRender(controlShowTodo);
  addTodoView.addHandlerClick(controlAddTodo); 
}
init();
