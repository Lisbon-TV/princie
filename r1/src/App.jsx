import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";

import Sidebar from "./Components/Side/Side";

function App() {
  return (
    <Container
      style={{
        backgroundColor: "#FAF9F6",
        marginTop: "70px",
        height: "730px",
        width: "1300px",
        borderRadius: "20px",
        padding: "0px",
      }}
    >
      <Sidebar />
    </Container>
  );
}

export default App;
