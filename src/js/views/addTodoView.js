import View from "./View.js";

class AddTodoView extends View {
  _parentElement = document.querySelector('.add-todo-container');
  _addTodoButton = document.getElementById("add__todo-btn");
  _underlay = document.querySelector('.underlay');
  _createTodo = document.querySelector('.create__todo-btn');
  _plusBtn = document.querySelector('#todo__plus-btn');

  constructor() {
    super();
    this._addHandlerShowAddTodo();
  };

  _clearInput() {
    this._parentElement.querySelector('#todo-desc').value = '';
    this._parentElement.querySelector('#deadline-date').value = '';
  };

  _createCloseBtn() {
    this._plusBtn.innerText = '';
    this._plusBtn.innerHTML = "<svg><use href='src/img/icons.svg#icon-close'></use></svg>";
    this._plusBtn.querySelector('use').setAttribute('fill', 'rgb(248 113 113)');
    this._plusBtn.classList.remove('add');
  }

  _createAddBtn() {
    this._plusBtn.innerText = '';
    this._plusBtn.innerHTML = "<svg><use href='src/img/icons.svg#icon-add'></use></svg>";
    this._plusBtn.classList.add('add');
    this._plusBtn.style.color = 'var(--light-grey)';
  }

  _toggleAddTodo() {
    this._plusBtn.classList.contains('add') ? this._createCloseBtn() : this._createAddBtn();
    this._underlay.classList.toggle('hidden');

  };

  _addHandlerShowAddTodo() {
    this._addTodoButton.addEventListener('click', this._toggleAddTodo.bind(this));
  }


  getTodo() {
    const title = this._parentElement.querySelector('#todo-desc').value;
    const dueDate = new Date(this._parentElement.querySelector('#deadline-date').value);
    const currentDate = new Date();
    this._clearInput();
    this._toggleAddTodo();
    if (!title) return;
    if (currentDate.getTime() > dueDate.getTime()) {
      console.error('Date in Past');
      return;
    }
    return {
      title: title,
      dueDate: dueDate,
      id: 'id' + new Date().getTime(),
      tag: 'Practice',
      status: 'todo',
      createdAt: new Date().getTime(), 
    }
  }

  addHandlerClick(handler) {
    this._createTodo.addEventListener('click', handler);
  }
};
export default new AddTodoView();
