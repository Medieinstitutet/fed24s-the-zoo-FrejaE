import { useContext } from "react";
import { MultiActionAreaCard } from "../components/AnimalsDisplay";
import Card from "@mui/material/Card";
import { AnimalContext } from "../contexts/AnimalContext";
import type { IAnimalExt } from "../models/IAnimal";
import { Box, CircularProgress, Typography } from "@mui/material";

export const Animals = () => {
  const { animals, loading } = useContext(AnimalContext);

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          padding: "20px",
        }}
      >
        Djuröversikt
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
          justifyContent: "center",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {animals.map((a) => (
              <Card
                sx={{
                  maxWidth: 345,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "auto",
                }}
                key={a.id}
              >
                <MultiActionAreaCard animal={a as IAnimalExt} />
              </Card>
            ))}
          </>
        )}
      </Box>
    </>
  );
};
