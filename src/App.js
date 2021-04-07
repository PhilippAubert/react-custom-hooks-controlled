import "./App.css";
import { useState } from "react";

function App() {
  // Add states and eventHandlers here

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [yes, setYes] = useState(true);

  function handleNameChange(event) {
    const { value } = event.target;
    setFirstName(value);
    console.log(value);
  }

  function handleSurnameChange(event) {
    const { value } = event.target;
    setLastName(value);
    console.log(value);
  }

  function handleAgeChange(event) {
    const { value } = event.target;
    setAge(value);
    console.log(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmail(value);
    console.log(value);
  }

  function handleYesChange(event) {
    const { value } = event.target;
    setYes(false);
    console.log(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fullForm = console.log("submitted");
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={handleNameChange}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          value={lastName}
          name="lastName"
          onChange={handleSurnameChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          value={age}
          name="age"
          onChange={handleAgeChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />
        <div className="newsletter">
          <input
            type="checkbox"
            value={yes}
            name="newsletter"
            onChange={handleYesChange}
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
