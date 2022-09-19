import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { useEffect, useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let arr = [
      {
        id: 1,
        content: 'hello',
        checked: false,
      },
      {
        id: 2,
        content: 'hello2',
        checked: false,
      },
      {
        id: 3,
        content: 'hello3',
        checked: true,
      },
    ];
    setTodos(arr);
  }, []);

  const removeTodoHandler = (id) => {
    console.log('remove clicked');
    let newArr = todos.filter((el) => el.id !== id);
    console.log(newArr);
    setTodos(newArr);
  };

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        content: text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const addNewTodoHandler = (val) => {
    let newArr = [
      ...todos,
      { id: todos.length + 1, content: val, checked: false },
    ];
    setTodos(newArr);
  };

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  });

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
