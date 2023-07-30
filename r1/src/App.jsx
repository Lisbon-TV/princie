import React from "react";
import "./App.css";

import { Container } from "@material-ui/core";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";

import Side from "./Components/Side/Side";

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
        display: "grid",
        gridTemplateColumns: "0.4fr 1fr 1fr",
        gridTemplateRows: "80px 90px 140px 1fr",
      }}
    >
      <div style={{ display: "grid" }}>
        <Side style={{ gridColumn: 1 }} />
      </div>

      <div style={{ gridColumn: 2, gridRow: 1 }}>Search bar</div>

      <h1
        style={{
          gridColumn: 2,
          gridRow: 2,
          margin: "0px 0px 0px 25px",
          fontSize: "35px",
          fontWeight: "400",
        }}
      >
        Welcome back, Maxie
      </h1>

      <p
        style={{
          gridColumn: 2,
          gridRow: 2,
          fontSize: "10px",
          color: "#aaaaaa",
          margin: "45px 0px 0px 20px",
        }}
      >
        Maximize product sales and store management in order to get the best
        results
      </p>

      <div style={{ gridColumn: 3, gridRow: 1 }}>Maxie Mon W</div>
      <div style={{ gridColumn: 3, gridRow: 2 }}>This Month</div>
      <div style={{ gridColumn: 3, gridRow: 3 }}>My Info</div>
      <div tyle={{ gridColumn: 2, gridRow: 3 }}>My Revenue</div>
      <div style={{ gridColumn: 2, gridRow: 4 }}>1st Chart</div>
      <div style={{ gridColumn: 3, gridRow: 4 }}>2nd Chart</div>
    </Container>
  );
}

export default App;
