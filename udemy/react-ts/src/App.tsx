// import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  //   const [todos, setTodos] = useState<Todo[]>([]);
  //   //   const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  //   const addTodoHandler = (todoText: string) => {
  //     const newTodo = new Todo(todoText);

  //     setTodos((prevTodos) => {
  //       return prevTodos.concat(newTodo);
  //     });
  //   };

  //   const removeTodoHanlder = (todoId: string) => {
  //     setTodos((prevTodos) => {
  //       return prevTodos.filter((todo) => todo.id !== todoId);
  //     });
  //   };
  return (
    <div className="App">
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
