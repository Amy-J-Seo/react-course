import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
