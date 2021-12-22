import { Provider } from 'react-redux';
import './App.css';
import Login from './pages/Login/Login';
import genereteStore from './redux/store';

function App() {

  const store = genereteStore();

  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Login />
        </header>
      </Provider>
    </div>
  );
}

export default App;
