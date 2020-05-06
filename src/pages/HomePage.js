import React from "react";
import Title from "../components/Title";

export default function HomePage() {
  return (
    <div>
      <h1>
        <Title />
      </h1>
      <p>
        We are : <b>open</b>
      </p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
      <button>Who is on duty? {"       "}</button>
      <button>I am a new patient</button>
    </div>
  );
}
