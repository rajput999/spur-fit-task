import Eqbeats from './components/Eqbeats';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Emotions from './components/Emotions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Eqbeats/>
      <Emotions/>
    </div>
  );
}

export default App;
