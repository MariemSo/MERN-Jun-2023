import SomeClassComponent from './components/SomeClassComponent';
import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App">
      <PersonalCard firstName="Doe" lastName="Jane" age="45" hairColor="Black" />
      <PersonalCard firstName="Smith" lastName="John" age="88" />
      <PersonalCard firstName="Fillmore" lastName="Millard" age="50" />
      <PersonalCard firstName="Smith" lastName="Maria" age="62" />
    </div>
  );
}

export default App;
