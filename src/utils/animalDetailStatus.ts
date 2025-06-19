import { FeedAnimalTypes } from "../components/FeedAnimalButton";

export const animalDetailStatus = (lastFed: string): FeedAnimalTypes => {
  const hours = (Date.now() - new Date(lastFed).getTime()) / (1000 * 60 * 60);
  if (hours <= 2) return FeedAnimalTypes.DISABLED;
  if (hours <= 3) return FeedAnimalTypes.WARNING;
  return FeedAnimalTypes.SUCCESS;
};
