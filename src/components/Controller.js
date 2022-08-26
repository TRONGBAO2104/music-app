import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

function Controller() {
  const theme = useTheme();
  const {
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    isPlaying,
    disableControlArea,
  } = useMusicPlayer();
  console.log(">>> disableControlArea", disableControlArea);

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return (
    <Box sx={{ width: "100%", overflow: "hidden", mt: 1 }}>
      <Widget>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          {/* Previous Button */}
          <IconButton
            aria-label="previous song"
            onClick={() => playPreviousTrack()}
            disabled={disableControlArea}
          >
            <SkipPreviousIcon fontSize="large" htmlColor={mainIconColor} />
          </IconButton>

          {/* Play/Pause Button */}
          <IconButton
            onClick={() => togglePlay()}
            disabled={disableControlArea}
          >
            {/* If isPlaying is true (meaning music is playing) --> Pause button showup --> click Pause --> music stop */}
            {isPlaying ? (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              // else -> Play button showup --> click Play --> music play
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>

          {/* Next Button */}
          <IconButton
            aria-label="next song"
            onClick={() => playNextTrack()}
            disabled={disableControlArea}
          >
            <SkipNextIcon fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          {/* Volumn control */}
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
      </Widget>
    </Box>
  );
}

export default Controller;
