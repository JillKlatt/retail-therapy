import logo from './logo.svg';
import './App.css';
import pageReducer from './components/reducers/pageReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pageReducer />
      </header>
    </div>
  );
}

export default App;
