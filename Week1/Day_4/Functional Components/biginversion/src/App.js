import './App.css';
import BirthdayCard from './components/BirthdayCard';
import UserForm from './components/UserForm';

function App() {

  const data= [
    { firstName: "Doe", lastName: "Jane", initAge: 45, hairColor: "black" },
    { firstName: "Smith", lastName: "John", initAge: 88},
    { firstName: "Fillmore", lastName: "Millard", initAge: 50 },
    { firstName: "Smith", lastName: "Maria", initAge: 62 },
  ];
  return (
    <div className="App">

      <fieldset>
      {data.map((e, i) => (<BirthdayCard 
        key={i}
        firstName={e.firstName}
        lastName={e.lastName}
        initAge={e.initAge}
        hairColor={e.hairColor}/> 
        ))}
      </fieldset>
      
      <fieldset>
        <legend>Form</legend>
        <UserForm />
      </fieldset>
    </div>
  );
}

export default App;
