import { Box, Button } from "@mui/material";
import { ActionTypes } from "../reducers/AnimalReducer";
import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { useParams } from "react-router";

type FeedAnimalProps = {
  type: FeedAnimalTypes;
};
export enum FeedAnimalTypes {
  DISABLED,
  SUCCESS,
  WARNING,
}

export const FeedAnimalButton = ({ type }: FeedAnimalProps) => {
  const { dispatch, animals } = useContext(AnimalContext);
  const { id } = useParams();
  const animal = animals.find((a) => a.id === Number(id));
  const handleClick = () => {
    if (animal) {
      dispatch({ payload: JSON.stringify(animal.id), type: ActionTypes.FEED });
    }
  };
  switch (type) {
    case FeedAnimalTypes.DISABLED:
      return (
        <Button variant="contained" disabled>
          Mata
        </Button>
      );
    case FeedAnimalTypes.SUCCESS:
      return (
        <Button variant="contained" onClick={handleClick}>
          Mata
        </Button>
      );
    case FeedAnimalTypes.WARNING:
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button variant="text" sx={{ backgroundColor: "goldenrod" }}>
            Mata
          </Button>
          <Box
            sx={{
              mt: 1,
              px: 2,
              py: 1,
              backgroundColor: "#f1c40f",
              borderRadius: "10px",
              position: "relative",
              color: "black",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            Snart matdags
            <Box
              sx={{
                content: '""',
                position: "absolute",
                top: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "8px solid #f1c40f",
              }}
            />
          </Box>
        </Box>
      );
    default:
      return null;
  }
};
