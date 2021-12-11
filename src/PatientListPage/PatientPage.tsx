import React, { useEffect, useState } from "react";
import { Patient, Gender } from "../types";
import axios from "axios";
//Entry, DiagnoseEntry, Diagnosis
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
  }, [PatientData]);

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
        <div>
          <h2>Entries</h2>
          <>
            {PatientData.entries.length > 0 ? (
              PatientData.entries.forEach((item) => {
                return (
                  //   <EntryRender
                  //     key={item.id}
                  //     diagnosisCodes={item.diagnosisCodes}
                  //     entry={item}
                  //   />
                  <p>{item.type}</p>
                );
              })
            ) : (
              <h4>no entries yet</h4>
            )}
          </>
        </div>
      </div>
    </>
  );
}

// function EntryRender({
//   diagnosisCodes,
//   entry,
// }: {
//   diagnosisCodes: string[];
//   entry: Entry;
// }) {
//   return (
//     <div>
//       <p>
//         Date:<span>{entry.date}</span>
//       </p>
//       <p>
//         Description:<span>{entry.description}</span>
//       </p>
//       <br />
//       <ul>
//         <>
//           {diagnosisCodes.forEach((code) => {
//             axios
//               .get<DiagnoseEntry[]>(`http://localhost:3001/api/diagnoses`)
//               .then((res) => {
//                 const codeCode: Diagnosis = res.data.find((item) => {
//                   item.code === code;
//                 })!;

//                 return (
//                   <li>
//                     {codeCode.code} - {codeCode.name}
//                   </li>
//                 );
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           })}
//         </>
//       </ul>
//     </div>
//   );
// }
