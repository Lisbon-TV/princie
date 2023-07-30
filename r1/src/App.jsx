import React from "react";
import "./App.css";

import { Container, Avatar, Typography } from "@material-ui/core";
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

      <div
        style={{
          gridColumn: 2,
          gridRow: 1,
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
          height: "40px",
          width: "300px",
          margin: "15px",
          borderRadius: "25px",
          backgroundColor: "#f1f1f1",
        }}
      >
        Search anything...
      </div>

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

      <div
        style={{
          gridColumn: 3,
          gridRow: 1,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f1f1f1",
          height: "40px",
          width: "180px",
          marginTop: "15px",
          borderRadius: "25px",
        }}
      >
        <Avatar alt="Maxie Mon Wachid" src="./img/profile-icon.png" />
        <div style={{ marginLeft: "10px" }}>
          <Typography style={{ fontSize: "11px" }} variant="body1">
            Maxie Mon Wachid
          </Typography>
          <Typography
            style={{ fontSize: "9px", color: "#aaaaaa" }}
            variant="body2"
          >
            @Maxie Mon Wachid
          </Typography>
        </div>
      </div>
      <div style={{ gridColumn: 3, gridRow: 2 }}>This Month</div>
      <div style={{ gridColumn: 2, gridRow: 3 }}>Monthly Recurring Revenue</div>
      <div style={{ gridColumn: 2, gridRow: 4 }}>Chart: Montly Revenue</div>
      <div style={{ gridColumn: 3, gridRow: 4 }}>Chart: Selling Product</div>
    </Container>
  );
}

export default App;
