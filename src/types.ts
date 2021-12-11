export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface discharge {
  date: string;
  criteria: string;
}
interface sickLeave {
  startDate: string;
  endDate: string;
}

export interface Entry {
  id: string;
  date: string;
  type: string;
  specialist?: string;
  employerName?: string;
  diagnosisCodes: Array<Diagnosis["code"]>;
  description: string;
  discharge?: discharge;
  sickLeave?: sickLeave;
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

// diagnoseRouter
export type Code = string;
export type Name = string;
export type Latin = string;

export interface DiagnoseEntry {
  code: Code;
  name: Name;
  latin?: Latin;
}
