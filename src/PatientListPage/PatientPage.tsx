import React from "react";
import { Patient } from "../types";

export default function PatientPage({
  PatientId,
}: {
  PatientId: string;
}): JSX.Element {
  return (
    <>
      <div>
        <h1>{PatientData.name}</h1>
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
