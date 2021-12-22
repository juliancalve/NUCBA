import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import i18n from './languages';
import Router from './Router/Router';

function App() {

  const { t } = useTranslation();

  i18n.options.interpolation.defaultVariables = {
    companyName: 'NUCBA'
  };

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector />
        <Router />
      </header>
    </div>
  );
}

export default App;
