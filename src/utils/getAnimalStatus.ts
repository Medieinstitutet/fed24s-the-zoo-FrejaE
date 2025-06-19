import { FeedIndicatorTypes } from "../components/FeedIndicator";

export const getAnimalStatus = (lastFed: string): FeedIndicatorTypes => {
  const hours = (Date.now() - new Date(lastFed).getTime()) / (1000 * 60 * 60);
  if (hours <= 3) return FeedIndicatorTypes.FULL;
  if (hours <= 4) return FeedIndicatorTypes.SOON_HUNGRY;
  if (hours <= 5) return FeedIndicatorTypes.FEED_NOW;
  return FeedIndicatorTypes.DESPERATE;
};
