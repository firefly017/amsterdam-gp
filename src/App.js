import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Title from "./components/Title";
import HomePage from "./pages/HomePage";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientDatabase from "./pages/PatientDatabase";
import PatientSignUp from "./pages/PatientSignUp";
import ViewDetails from "./pages/ViewDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/doctorschedule" component={DoctorSchedule} />
        <Route path="/patientdatabase" component={PatientDatabase} />
        <Route path="/patientsignup" component={PatientSignUp} />
        <Route path="/viewdetails" component={ViewDetails} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
