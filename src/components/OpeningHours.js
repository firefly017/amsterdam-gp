import React from "react";

export default function OpeningHours() {
  const date = new Date();
  const currentHour = date.getHours();
  const areWeOpen = currentHour >= 8;
  const areWeClose = currentHour < 17;
  const officeHour = areWeOpen && areWeClose;

  return <div>We are: {officeHour ? "OPEN" : "CLOSE"}</div>;
}
