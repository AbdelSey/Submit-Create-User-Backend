import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);

  const createUser = () => {
    Axios.post("http://localhost:5000/createUser", {
      name,
      lastName,
      age,
    }).then((response) => {
      alert("SUCCESS USER CREATED");
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="First Name..."
        />
        <br />
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          placeholder="Last Name... "
        />
        <br />
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="Age.."
        />
      </div>

      <button onClick={createUser}> Create User</button>
    </div>
  );
}

export default App;
