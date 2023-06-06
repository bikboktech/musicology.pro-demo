import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const PlaylistDownloader = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Box my={2}>
      {/* <Typography
        variant="subtitle1"
        fontWeight={600}
        component="label"
        htmlFor="spotifyPlaylistLink"
        mb="5px"
      >
        Spotify Playlist Link
      </Typography> */}
      <CustomTextField
        variant="outlined"
        label="Spotify Playlist Link"
        placeholder="ex. https://open.spotify.com/playlist/0S3oyFxQ3iglOGVxFTF79K?si=ea7e596097014917"
        fullWidth
      />
    </Box>
    <Box>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
        type="submit"
      >
        Download
      </Button>
    </Box>
  </>
);

export default PlaylistDownloader;
