import React, { useState, useEffect } from "react";
import MakeAppoinment from "../components/MakeAppoinment";
import axios from "axios";
import DoctorCard from "../components/Doctorcard";

export default function DoctorSchedule() {
  const [doctors, set_doctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      console.log("does this work?");
      const res = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log("got back:", res);
      set_doctors(res.data);
    }
    fetchDoctors();
  }, []);

  function displayDoctors() {
    if (doctors.length === 0) {
      return "Loading...";
    } else {
      return (
        <table className="doctors">
          <thead>
            <tr className="doctortable-headrow">
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
          </thead>
          {doctors.map((doctor) => {
            const availability = doctor.onDuty ? "on duty" : "off duty";
            return (
              <DoctorCard
                key={doctor.id}
                doctor={doctor.doctor}
                onDuty={availability}
              />
            );
          })}
        </table>
      );
    }
  }

  return (
    <div>
      <h1>Who is on duty?</h1>
      {displayDoctors()}
      <MakeAppoinment />
    </div>
  );
}
