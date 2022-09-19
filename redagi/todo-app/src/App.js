import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { useEffect, useState, useRef, useCallback, useReducer } from 'react';
import { removeTypeDuplicates } from '../../../../../../Users/com4in/AppData/Local/Microsoft/TypeScript/4.9/node_modules/@babel/types/lib/index';

function createBulkTodos() {
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

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      //{type:'INSERT', todo:{id:1, content:'todo', checked:false}}
      return todos.concat(action.todo);
    case 'REMOVE':
      //{type:'REMOVE', id:1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      //{type:'TOGGLE, id:1}
      return removeTypeDuplicates.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // const [todos, setTodos] = useState(createBulTodos);
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
    // setTodos((todos) => todos.filter((el) => el.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      content: text,
      checked: false,
    };
    // setTodos(todos.concat(todo));
    //setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const addNewTodoHandler = (val) => {
    let newArr = [
      ...todos,
      { id: todos.length + 1, content: val, checked: false },
    ];
    // setTodos(newArr);
  };

  const onToggle = useCallback((id) => {
    // setTodos((todos) => {
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   );
    // });
    dispatch({ type: 'TOGGLE', id });
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
