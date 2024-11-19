import logo from './logo.svg';
import './App.css';
import DynamicFormGenerator from './components';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <DynamicFormGenerator></DynamicFormGenerator>
        
      </header>
    </div>
  );
}

export default App;
