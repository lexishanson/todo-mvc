var todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log("(X) ", this.todos[i].todoText);
        } else {
          console.log("( ) ", this.todos[i].todoText);
        }
      }  
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {

    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let setToFalse = this.todos.every(function(todo) { return todo.completed });
    this.todos.forEach(
      function(todo) { todo.completed = !setToFalse; });
  },
  numCompletedTodos: function() {
    return this.todos.filter(
      function(todo) { return todo.completed; }).length; },
  areAllTodosCompleted:  function() {
    return this.todos.every(
      function(todo) { 
        return todo.completed }); 
  },  
};

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function () {
  todoList.toggleAll();
  view.displayTodos();
  }
};

var view = {
  displayTodos: function () { 
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (i=0;i< todoList.todos.length;i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true){
        todoTextWithCompletion = `(X) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `(  ) ${todo.todoText}`;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};






