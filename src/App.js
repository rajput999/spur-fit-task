import Eqbeats from './components/Eqbeats';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Emotions from './components/Emotions';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Eqbeats/>
      <Emotions/>
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
