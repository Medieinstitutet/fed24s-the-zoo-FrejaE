import { createContext, type Dispatch } from "react";
import type { IAnimalExt } from "../models/IAnimal";
import type { Actions } from "../reducers/AnimalReducer";

interface IAnimalContext {
  animals: IAnimalExt[];
  dispatch: Dispatch<Actions>;
  loading: boolean;
}

export const AnimalContext = createContext<IAnimalContext>({
  animals: [],
  dispatch: () => {},
  loading: false,
});
