import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const showFormData = (formData) => {
    setName(formData.get('name'));
    setEmail(formData.get('email'));
    setGender(formData.get('gender'));
  };
  return (
    <>
      <div>
        <form action={showFormData}>
          <input type="text" name="name" placeholder="your name" />
          <input type="email" name="email" placeholder="your email" />
          <label htmlFor="gender">Male</label>
          <input type="radio" name="gender" value="Male" />
          <label htmlFor="gender">Female</label>
          <input type="radio" name="gender" value="Female" />
          <button type="submit">Show Data</button>
        </form>
        <div>
          Name: {name}
          Email: {email}
          Gender: {gender}
        </div>
      </div>
    </>
  );
}

export default App;
