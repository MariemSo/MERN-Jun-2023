import "./App.css";
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path="/people/:element" element={<People />} />
        <Route path="/planets/:element" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
