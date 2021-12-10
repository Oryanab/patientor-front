import express from "express";
import patients from "../data/patients";
import {
  ExcludeSSNPatientEntry,
  PatientEntry,
  Patient,
} from "../services/types";
import { v1 as uuid } from "uuid";
import toNewPatientEntry from "../services/utils";

const patientsRouter = express.Router();

const getDiagnoses = (): ExcludeSSNPatientEntry[] => {
  const noSSNpatients: ExcludeSSNPatientEntry[] = patients.patients.map(
    ({ id, name, dateOfBirth, gender, occupation }) => {
      return { id, name, dateOfBirth, gender, occupation };
    }
  );
  return noSSNpatients;
};

patientsRouter.post("/", (_req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(_req.body);
    if (newPatientEntry) {
      const { name, dateOfBirth, ssn, gender, occupation } = _req.body;
      let id: string = uuid();
      const newPatient = patients.addPatients(
        id,
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
      );
      res.json(patients);
    }
  } catch (error: unknown) {
    let errorMessage: string = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

patientsRouter.get("/", (_req, res) => {
  res.send(getDiagnoses());
});

patientsRouter.get("/:id", (_req, res) => {
  const SearchPatients: Patient = patients.patients.find(
    (item) => item.id === _req.params.id
  )!;
  res.json(SearchPatients);
});

export default patientsRouter;
