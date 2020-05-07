import React from "react";

export default function Doctorcard(props) {
  return (
    <tbody>
      <tr>
        <th>{props.doctor}</th>
        <th>{props.onDuty}</th>
      </tr>
    </tbody>
  );
}
