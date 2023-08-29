import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Yangon"/>
      <footer>
        This project was coded by <a href='www.linkedin.com/in/phyu-sin-lin-186768256' target='_blank' rel='noreferrer'>Phyu Sin Lin</a> and is{" "}
        <a href="https://github.com/oliviaphyu/weather-react-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
