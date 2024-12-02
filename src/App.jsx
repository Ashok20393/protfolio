import React, { useEffect, useState } from "react";
import PatientCard from "./Patientcard";
import BloodPressureChart from "./Bloodpressurechart";
import "./App.css";

function App() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Fetch patient data
    fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0', // Replace YOUR_API_KEY with the actual API key
      }
    })
    .then(response => response.json())
    .then(data => {

      const jessicaTaylor = data.find(patient => patient.name === 'Jessica Taylor');
      
      if (jessicaTaylor) {
        setPatient(jessicaTaylor); // Update state with Jessica Taylor's data
      } else {
        console.log('Jessica Taylor not found.');
      }
    })
    .catch(error => console.error('Error fetching data:', error));},[] );

  return (
    <div className="container">
      <header>
      <h1>Patient Dashboard</h1>
      </header>
      <main>
        {patient ? (
          <>
            <PatientCard patient={patient} />
            <BloodPressureChart bloodPressure={patient.bloodPressure} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

export default App;