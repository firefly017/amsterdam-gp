import React, { useState } from "react";

export default function PatientSignUp() {
  // const [name, set_name] = useState("");
  return (
    <div className="PatientSignUpForm">
      <h1>Patient Sing up</h1>
      <p>
        First name : <input type="text" placeholder="First Name" />
      </p>
      <p>
        Last name : <input type="text" placeholder="Last name" />
      </p>
      <p>
        E-mail : <input type="text" placeholder="E-mail" />
      </p>
      <p>
        Phone : <input type="text" placeholder="Phone number" />
      </p>
      <p>
        <label for="gender">Gender : </label>
        <select id="gender">
          <option value="select">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </p>
      <p>
        <label for="date of birth">
          Date of birth :{" "}
          <input type="date" id="date of birth" name="date of birth"></input>
        </label>
      </p>

      <p>
        <button type="button">Submit</button>
      </p>
    </div>
  );
}
