import './App.css';
import Router from './Router/Router';

function App() {

  const callApi = async () => {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const json = await response.json();
      console.log(json);
    } catch( error ){
      console.log('error', error)
      alert(error)
    }
  }

  callApi();


  return (
    <div className="App">
      <h1>Holis</h1>
    </div>
  );
}

export default App;
