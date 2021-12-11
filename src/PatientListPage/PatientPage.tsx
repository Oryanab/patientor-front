import React, { useEffect, useState } from "react";
import { Patient, Gender } from "../types";
import axios from "axios";

export default function PatientPage({
  PatientId,
}: {
  PatientId: string;
}): JSX.Element {
  const initial: Patient = {
    id: "",
    name: "",
    dateOfBirth: "",
    ssn: "",
    gender: Gender.Male,
    occupation: "",
    entries: [],
  };
  const [PatientData, SetPatientData] = useState<Patient>(initial);

  useEffect(() => {
    const fetchPatientData = () => {
      axios
        .get<Patient>(`http://localhost:3001/api/patients/${PatientId}`)
        .then((res) => {
          SetPatientData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    void fetchPatientData();
  }, []);

  return (
    <>
      <div>
        <br />
        <h1>Patient Info:</h1>
        <h3>{PatientData.name}</h3>
        <br />
        <p>
          SSN: <span>{PatientData.ssn}</span>
        </p>
        <p>
          Occupation: <span>{PatientData.occupation}</span>
        </p>
      </div>
    </>
  );
}
