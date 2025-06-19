import { Button } from "@mui/material";
import "../styles/feedButton.css";
type FeedIndicatorProps = {
  type: FeedIndicatorTypes;
};
export enum FeedIndicatorTypes {
  FULL,
  SOON_HUNGRY,
  FEED_NOW,
  DESPERATE,
}

export const FeedIndicator = ({ type }: FeedIndicatorProps) => {
  switch (type) {
    case FeedIndicatorTypes.FULL:
      return (
        <Button variant="contained" color="success">
          Mätt och belåten
        </Button>
      );
    case FeedIndicatorTypes.SOON_HUNGRY:
      return (
        <Button variant="contained" sx={{ backgroundColor: "goldenrod" }}>
          Snart hungrig
        </Button>
      );
    case FeedIndicatorTypes.FEED_NOW:
      return (
        <Button
          variant="contained"
          sx={{ backgroundColor: "goldenrod" }}
          className="pulse"
        >
          Dags att mata
        </Button>
      );
    case FeedIndicatorTypes.DESPERATE:
      return (
        <Button variant="outlined" color="error" className="pulse">
          Väldigt hungrig
        </Button>
      );
    default:
      return null;
  }
};
