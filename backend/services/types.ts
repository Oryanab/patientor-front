// diagnoseRouter
export type Code = string;
export type Name = string;
export type Latin = string;

export interface DiagnoseEntry {
  code: Code;
  name: Name;
  latin?: Latin;
}

// patientsRouter
export type Id = string;
export type DateOfBirth = string;
export type Ssn = string;
//export type Gender = string;
export type Occupation = string;

export enum Gender {
  Male = "male",
  Female = "female",
}

export interface PatientEntry {
  id: Id;
  name: Name;
  dateOfBirth: DateOfBirth;
  ssn: Ssn;
  gender: Gender;
  occupation: Occupation;
  entries: Entry[];
}

export interface Entry {
  id: string;
  date: string;
  type: string;
  specialist?: string;
  employerName?: string;
  diagnosisCodes: Array<DiagnoseEntry["code"]>;
  description: string;
  discharge?: object;
  sickLeave?: object;
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
}
export type PublicPatient = Omit<Patient, "ssn" | "entries">;
export type ExcludeSSNPatientEntry = Omit<PatientEntry, "ssn" | "entries">;
