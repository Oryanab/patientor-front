import { PatientEntry, Gender, Entry } from "./types";

type Fields = {
  id: unknown;
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
  entries: Entry[];
};
const toNewDiaryEntry = ({
  id,
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
  entries,
}: Fields): PatientEntry => {
  const newEntry: PatientEntry = {
    id: parseId(id),
    name: parseName(name),
    dateOfBirth: parseDateOfBirth(dateOfBirth),
    ssn: parseSSN(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
    entries: parseEntries(entries),
  };
  return newEntry;
};

// ID DEFINE
// ID DEFINE
const isId = (id: unknown): id is string => {
  return typeof id === "string" || id instanceof String;
};

const parseId = (id: unknown): string => {
  if (!id || !isId(id)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return id;
  }
};

// NAME DEFINE
// NAME DEFINE
const isName = (name: unknown): name is string => {
  return typeof name === "string" || name instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isName(name)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return name;
  }
};

// DateOfBirth DEFINE
// DateOfBirth DEFINE
const isDateOfBirth = (dateOfBirth: unknown): dateOfBirth is string => {
  return typeof dateOfBirth === "string" || dateOfBirth instanceof String;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isDateOfBirth(dateOfBirth)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return dateOfBirth;
  }
};

// SSN DEFINE
// SSN DEFINE
const isSSN = (ssn: unknown): ssn is string => {
  return typeof ssn === "string" || ssn instanceof String;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isSSN(ssn)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return ssn;
  }
};

// Gender DEFINE
// Gender DEFINE

// export enum Gender {
//   Male = "male",
//   Female = "female",
// }

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return gender;
  }
};

//Occupation DEFINE
//Occupation DEFINE
const isOccupation = (occupation: unknown): occupation is string => {
  return typeof occupation === "string" || occupation instanceof String;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isOccupation(occupation)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return occupation;
  }
};

//entries DEFINE
//entries DEFINE
const isEntries = (entries: unknown): entries is string => {
  return typeof entries === "string" || entries instanceof Array;
};

const parseEntries = (entries: Entry[]): Entry[] => {
  if (!entries || !isEntries(entries)) {
    throw new Error("Incorrect or missing comment");
  } else {
    return entries;
  }
};

export default toNewDiaryEntry;
