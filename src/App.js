import Eqbeats from './components/Eqbeats';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Emotions from './components/Emotions';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Section10 from './components/Section10';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Eqbeats/>
      <Emotions/>
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8 />
      <Section9 />
      <Section10/>
    </div>
  );
}

export default App;
