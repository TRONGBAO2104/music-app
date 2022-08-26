import React, { createContext, useState } from "react";
import Track1 from "../mp3/Track1.mp3";
import Track2 from "../mp3/Track2.mp3";
import Track3 from "../mp3/Track3.mp3";
import Track4 from "../mp3/Track4.mp3";
import Track5 from "../mp3/Track5.mp3";
import Track6 from "../mp3/Track6.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Goldn",
      author: "Prazkhanal",
      file: Track1,
    },
    {
      name: "Milk Shake",
      author: "Coma-Media",
      file: Track2,
    },
    {
      name: "Guitar Electro Sport",
      author: "Gvidon",
      file: Track3,
    },
    {
      name: "Inspiring Cinematic Ambient",
      author: "Lexin Music",
      file: Track4,
    },
    {
      name: "Smooth Waters",
      author: "SergePavkinMusic",
      file: Track5,
    },
    {
      name: "Field Grass",
      author: "SergePavkinMusic",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
  disableControlArea: true,
};

// It returns the .Provider and hold values in prop value.
// Now, in the App.js, instead of wrapping <MusicPlayerContext.Provider>,
// we can just simply use <MusicPlayerProvider>.

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
