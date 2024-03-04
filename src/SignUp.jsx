import { useState } from "react";

export default function SignUp() {
  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForms({ ...forms, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // check if the confirm and password is the same and then post data
    try {
      let result = await fetch('/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: forms.email,
          password: forms.password,
          confirm: forms.confirm,
          firstName: forms.firstName,
          lastName: forms.lastName
        })
      });
      let data = await result.json();
      console.log(data);
    } catch (error) {
      setError(error || 'An error occurred');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type='text' id="firstName" name="firstName" required onChange={handleChange} value={forms.firstName} />

      <label htmlFor="lastNmae">Last Name</label>
      <input type='text' id="lastNmae" name="lastName" required onChange={handleChange} value={forms.lastName} />

      <label htmlFor="email">Email</label>
      <input type='email' id="email" name="email" required onChange={handleChange} value={forms.email} />

      <label htmlFor="password">Password</label>
      <input type='password' id="password" name="password" required onChange={handleChange} value={forms.password} />

      <label htmlFor="confirm">Confirm</label>
      <input type='password' id="confirm" name="confirm" required onChange={handleChange} value={forms.confirm} />

      <button type="submit">Submit</button>
    </form>
  );
}
