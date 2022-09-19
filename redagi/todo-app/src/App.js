import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { useEffect, useState, useRef, useCallback } from 'react';
import { removeTypeDuplicates } from '../../../../../../Users/com4in/AppData/Local/Microsoft/TypeScript/4.9/node_modules/@babel/types/lib/index';

function createBulTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      content: `todos ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulTodos);
  // useEffect(() => {
  //   let arr = [
  //     {
  //       id: 1,
  //       content: 'hello',
  //       checked: false,
  //     },
  //     {
  //       id: 2,
  //       content: 'hello2',
  //       checked: false,
  //     },
  //     {
  //       id: 3,
  //       content: 'hello3',
  //       checked: true,
  //     },
  //   ];
  //   setTodos(arr);
  // }, []);

  const removeTodoHandler = useCallback((id) => {
    setTodos((todos) => todos.filter((el) => el.id !== id));
  }, []);

  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      content: text,
      checked: false,
    };
    // setTodos(todos.concat(todo));
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const addNewTodoHandler = (val) => {
    let newArr = [
      ...todos,
      { id: todos.length + 1, content: val, checked: false },
    ];
    setTodos(newArr);
  };

  const onToggle = useCallback((id) => {
    setTodos((todos) => {
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      );
    });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert addTodoFn={addNewTodoHandler} onInsert={onInsert} />
      <TodoList
        todos={todos}
        removeHandler={removeTodoHandler}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
}

export default App;
