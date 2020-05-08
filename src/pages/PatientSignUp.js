import React, { useState } from "react";

export default function PatientSignUp() {
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  function submitForm() {
    console.log("Submitting the form", formData);
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return <h3>Thank you!</h3>;
  }

  return (
    <form>
      <p>
        <label>First name </label>
        <input type="text" name="firstName" onChange={handleInputChange} />
      </p>
      <p>
        <label>Last name </label>
        <input type="text" name="lastName" onChange={handleInputChange} />
      </p>
      <p>
        <label>Email </label>
        <input type="text" name="email" onChange={handleInputChange} />
      </p>
      <p>
        <label>Phone </label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </p>
      <p>
        <label for="gender">Gender : </label>

        <select name="gender" onChange={handleInputChange}>
          <option value="select">Select gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </p>
      <p>
        <label for="date of birth">
          Date of birth :{" "}
          <input
            type="date"
            id="date of birth"
            name="date of birth"
            onChange={handleInputChange}
          ></input>
        </label>
      </p>
      <div>
        <input type="button" value="Submit" onClick={submitForm} />
      </div>
    </form>
  );
}

//jend helping me out
// import React, { useState } from "react";

// export default function PatientSignUp() {
//   const [firstName, setFirstName] = useState(" ");

//   function changeFirstName(event) {
//     setFirstName(event.target.value);
//   }

//   // prepare state
//   return (
//     <form className="PatientSignUpForm">
//       <h1>Patient Sing up</h1>
//       <p>
//         First name :{" "}
//         <input
//           type="text"
//           value={firstName}
//           onChange={changeFirstName}
//           placeholder="First Name"
//         />
//       </p>
//       <p>
//         Last name : <input type="text" placeholder="Last name" />
//       </p>
//       <p>
//         E-mail : <input type="text" placeholder="E-mail" />
//       </p>
//       <p>
//         Phone : <input type="text" placeholder="Phone number" />
//       </p>
//       <p>
//         <label for="gender">Gender : </label>
//         <select id="gender">
//           <option value="select">Select Gender</option>
//           <option value="female">Female</option>
//           <option value="male">Male</option>
//           <option value="other">Other</option>
//         </select>
//       </p>
//       <p>
//         <label for="date of birth">
//           Date of birth :{" "}
//           <input type="date" id="date of birth" name="date of birth"></input>
//         </label>
//       </p>

//       <p>{/* <button type="button">Submit</button> */}</p>
//       <button type="button" onClick={() => console.log(firstName)}>
//         change firstname{" "}
//       </button>
//     </form>
//   );
// }

//Thomas's code

// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import Datepicker from "react-datepicker";

// export default function NewPatientCard() {
//   const [firstName, setfirstName] = useState("First name");
//   const [lastName, setLastName] = useState("last name");
//   const [email, setEmail] = useState("email ");
//   const [phoneNumber, setPhoneNumber] = useState("phone number");
//   const [gender, setGender] = useState("Gender");
//   const [dateOfBirth, setDateOfBirth] = useState("Date of brith");

//   return (
//     <form>
//       <h1>Patient signup</h1>
//       <label>first name </label>
//       <input
//         key="firstName"
//         onChange={(event) => setfirstName(event.target.value)}
//       ></input>

//       <label>last name </label>
//       <input
//         key="lastName"
//         onChange={(event) => setLastName(event.target.value)}
//       ></input>

//       <label>email </label>
//       <input
//         key="email"
//         onChange={(event) => setEmail(event.target.value)}
//       ></input>

//       <label>phone </label>
//       <input
//         key="phoneNumber"
//         onChange={(event) => setPhoneNumber(event.target.value)}
//       ></input>

//       <label>gender</label>
//       <select onChange={(event) => setGender(event.target.value)}>
//         <option value="man">man</option>
//         <option value="woman">woman</option>
//       </select>
//       {/* <Datepicker
//         showPopperArrow={false}
//         onChange={setDateOfBirth}
//         placeholderText="MM/DD/YYYY"
//       /> */}

//       {/* <Link to ={`/SubmissionSend`}> */}
//       <button
//         type="button"
//         onClick={() =>
//           console.log([
//             firstName,
//             lastName,
//             email,
//             phoneNumber,
//             gender,
//             dateOfBirth,
//           ])
//         }
//       >
//         Submit
//       </button>
//       {/* </Link> */}
//     </form>
//   );
// }
