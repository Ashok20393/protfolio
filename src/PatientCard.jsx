import React from "react";

function PatientCard({ patient }) {
  return (
    <div className="patient-card">
      <h2>{patient.name}</h2>
      <p>
        Age: <span>{patient.age}</span>, Gender: <span>{patient.gender}</span>
      </p>
    </div>
  );
}

export default PatientCard;