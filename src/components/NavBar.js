import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Home{"   |   "}
      </NavLink>
      <NavLink
        to="/doctorschedule"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Doctor Schedule{"   |   "}
      </NavLink>
      <NavLink
        to="/patientdatabase"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Patient Database{"   |   "}
      </NavLink>
      <NavLink
        to="/patientsignup"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Patient Signup{"   |   "}
      </NavLink>
      <NavLink
        to="/viewdetails"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        View Details
      </NavLink>
    </div>
  );
}
