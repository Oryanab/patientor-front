import express from "express";
import diagnoses from "../data/diagnoses";
import { DiagnoseEntry } from "../services/types";

const diagnoseRouter = express.Router();

const getDiagnoses = (): DiagnoseEntry[] => {
  return diagnoses;
};

diagnoseRouter.get("/", (_req, res) => {
  res.send(getDiagnoses());
});
export default diagnoseRouter;
