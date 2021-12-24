import './App.css';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        {/* <Register /> */}
        {/* <Products /> */}
      </header>
    </div>
  );
}

export default App;
