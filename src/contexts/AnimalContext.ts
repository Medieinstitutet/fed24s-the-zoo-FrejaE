import { createContext, type Dispatch } from "react";
import type { IAnimal } from "../models/IAnimal";

interface IAnimalContext {
    animals: IAnimal[]:
    dispatch: Dispatch<Action>
}

export const AnimalContext = createContext<IAnimalContext>({
    animals: [],
    dispatch: ()=>{},
})