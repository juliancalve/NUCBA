import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { CheckToken } from './redux/auth';
import Router from './Router/Router';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('estoy chewckeando')
    dispatch(CheckToken());
  }, []);

  return (
    <div className="App">
        <header className="App-header">
            <Router />
        </header>
    </div>
  );
}

export default App;
