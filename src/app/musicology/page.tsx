"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import PlaylistDownloader from "./PlaylistDownloader";
import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps<{
//   apiUrl: string | undefined;
// }> = async () => {
//   return { props: { apiUrl: process.env.API_URL } };
// };

const Musicology = () => {
  return (
    <PageContainer title="Download" description="page for playlist downloading">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh", backgroundColor: "rgb(43,43,43)" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            xl={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={0} sx={{ p: 4, zIndex: 1, width: "100%" }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <PlaylistDownloader
                subtext={
                  <Typography
                    variant="h3"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Playlist Downloader
                  </Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default Musicology;
