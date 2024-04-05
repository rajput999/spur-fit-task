import Eqbeats from './components/Eqbeats';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Emotions from './components/Emotions';
import Section5 from './components/Section5';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Eqbeats/>
      <Emotions/>
      <Section5 />
    </div>
  );
}

export default App;
