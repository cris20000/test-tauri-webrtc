import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={()=>navigator.mediaDevices.getDisplayMedia()}>test</button>
    </div>
  );
}

export default App;
