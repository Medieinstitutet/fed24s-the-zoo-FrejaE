import { Container, Typography, CircularProgress, Grid } from "@mui/material";

export const UnderConstruction = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "124px" }}
      >
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid>
            <Typography variant="h4" component="h1" gutterBottom>
              Under Construction
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body1">
              We're working hard to improve our site. Please check back soon!
            </Typography>
          </Grid>
          <Grid>
            <CircularProgress />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
