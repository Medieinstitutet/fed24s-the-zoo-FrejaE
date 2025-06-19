import { useParams } from "react-router";
import type { IAnimalExt } from "../models/IAnimal";
import { useContext, useEffect, useState } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { getAnimalStatus } from "../utils/getAnimalStatus";
import { FeedIndicatorTypes } from "../components/FeedIndicator";
import { animalDetailStatus } from "../utils/animalDetailStatus";
import { FeedAnimalButton } from "../components/FeedAnimalButton";

export const Animal = () => {
  const { id } = useParams();
  const animalId = Number(id);

  const { animals, loading } = useContext(AnimalContext);
  const animal = animals.find((i) => i.id === animalId) as IAnimalExt;

  if (!animal) return <p>Kunde inte hämta djur.</p>;

  const statusMap = {
    [FeedIndicatorTypes.FULL]: "Mätt och belåten",
    [FeedIndicatorTypes.FEED_NOW]: "Matdags",
    [FeedIndicatorTypes.DESPERATE]: "Väldigt hungrig",
    [FeedIndicatorTypes.SOON_HUNGRY]: "Snart matags",
  };
  const status = getAnimalStatus(animal.lastFed);
  const statusText = statusMap[status];
  const animalStatus = animalDetailStatus(animal.lastFed);

  const [imgSrc, setImgSrc] = useState(animal.imageUrl);

  useEffect(() => {
    setImgSrc(animal.imageUrl);
  }, [animal]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).onerror = null;
    setImgSrc("/fallback.jpg");
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{ p: 4, maxWidth: 800, margin: "auto", marginTop: 20 }}
      >
        <Grid container spacing={4} alignItems="flex-start">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Box
                    component="img"
                    src={imgSrc}
                    alt={animal.name}
                    onError={handleError}
                    sx={{
                      maxWidth: 250,
                      height: "auto",
                      borderRadius: 2,
                    }}
                  />
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    🐾 Född: {animal.yearOfBirth}
                  </Typography>
                  <Typography variant="body2">
                    💊 Medicin: {animal.medicine || "Ingen"}
                  </Typography>
                </Box>
              </Grid>
              <Grid>
                {/* HÄR ÄR KNAPPEN */}
                <FeedAnimalButton type={animalStatus} />
              </Grid>
              <Grid>
                <Typography variant="body2">Status:{statusText} </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" sx={{ lineHeight: 1 }}>
                      {animal.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontStyle: "italic", mt: 0.5 }}
                    >
                      {animal.latinName}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {animal.longDescription}
                  </Typography>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </>
  );
};
