import { useState } from "react";

export default function Login() {
  const [enteredCredentials, setEnteredCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChangeCredentials = (identifier, value) => {
    setEnteredCredentials((prevCredentials) => {
      return { ...prevCredentials, [identifier]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enteredCredentials);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleChangeCredentials("email", e.target.value)}
            value={enteredCredentials.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) =>
              handleChangeCredentials("password", e.target.value)
            }
            value={enteredCredentials.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
