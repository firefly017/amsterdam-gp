import React from "react";
import Title from "../components/Title";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
// } from "react-router-dom";
import { Link } from "react-router-dom";
// import doctorschedule from "../components/MakeAppoinment";
import MakeAppoinment from "../components/MakeAppoinment";

export default function HomePage() {
  return (
    <div>
      <h1>
        <Title />
      </h1>
      <MakeAppoinment />

      <Link to={`/doctorschedule`}>
        <button>Who is on duty?</button>
      </Link>

      <Link to={`/patientsignup`}>
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}
