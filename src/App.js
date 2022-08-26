import { Container } from "@mui/material";
import React from "react";
import Controller from "./components/Controller";
import DisplayInfo from "./components/DisplayInfo";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <DisplayInfo />
        <TrackList />
        <Controller />
      </Container>
    </MusicPlayerProvider>
  );
}

export default App;
