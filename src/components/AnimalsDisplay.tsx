import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router";
import type { IAnimalExt } from "../models/IAnimal";
import { getAnimalStatus } from "../utils/getAnimalStatus";
import { FeedIndicator } from "./FeedIndicator";
import { useState } from "react";

type AnimalDisplayProps = {
  animal: IAnimalExt;
};

export const MultiActionAreaCard = ({ animal }: AnimalDisplayProps) => {
  const [imgSrc, setImgSrc] = useState(animal.imageUrl);
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).onerror = null;
    setImgSrc("/fallback.jpg");
  };
  const statusType = getAnimalStatus(animal.lastFed);
  return (
    <>
      <Link
        to={`/animal/${animal.id}`}
        style={{ textDecoration: "none", flexGrow: 1 }}
      >
        <CardActionArea>
          <img
            height="140"
            src={imgSrc}
            alt={animal.name}
            onError={handleError}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {animal.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {animal.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <FeedIndicator type={statusType} />
      </CardActions>
    </>
  );
};
