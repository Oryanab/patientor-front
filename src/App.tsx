import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";
import { apiBaseUrl } from "./constants";
import { useStateValue } from "./state";
import { Patient } from "./types";
import PatientPage from "./PatientListPage/PatientPage";
import PatientListPage from "./PatientListPage";

const App = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch({ type: "SET_PATIENT_LIST", payload: patientListFromApi });
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientList();
  }, [dispatch]);

  const [PatientId, setPatientId] = useState("");
  return (
    <>
      <div className="App">
        <Router>
          <Container>
            <Header as="h1">Patientor</Header>
            <Button as={Link} to="/" primary>
              Home
            </Button>
            <Divider hidden />
            <Switch>
              <Route path="/">
                <PatientListPage setPatientId={setPatientId} />
              </Route>
            </Switch>
            <Route path="/info">
              <PatientPage PatientId={PatientId} />
            </Route>
          </Container>
        </Router>
      </div>
    </>
  );
};

export default App;
