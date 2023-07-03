import "./App.css";
import PersonalCard from "./components/PersonalCard";

function App() {
  const data = [
    { firstName: "Doe", lastName: "Jane", age: "45", hairColor: "black" },
    { firstName: "Smith", lastName: "John", age: "88" },
    { firstName: "Fillmore", lastName: "Millard", age: "50" },
    { firstName: "Smith", lastName: "Maria", age: "62" },
  ];
  return (
    <div className="App">
      <fieldset>
        <legend>PersonalCard</legend>
        {data.map((e, i) => (
          <PersonalCard
            key={i}
            firstName={e.firstName}
            lastName={e.lastName}
            age={e.age}
            hairColor={e.hairColor}
            
          />
        ))}
      </fieldset>
    </div>
  );
}

export default App;
