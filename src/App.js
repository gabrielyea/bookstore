import { useSelector, useDispatch } from 'react-redux';
import { add } from './redux/books/books';

function App() {
  const books = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      hello
      <div>{books}</div>
      <button type="button" aria-label="add" onClick={() => dispatch(add())}>
        click here
      </button>
    </div>
  );
}

export default App;
