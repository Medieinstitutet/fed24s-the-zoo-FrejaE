import type { IAnimalExt } from "../models/IAnimal";

export enum ActionTypes {
  FEED,
  ALL_ANIMALS,
}
export type Actions = {
  type: ActionTypes;
  payload: string;
};

export const AnimalReducer = (
  animals: IAnimalExt[],
  action: Actions
): IAnimalExt[] => {
  switch (action.type) {
    case ActionTypes.ALL_ANIMALS: {
      return JSON.parse(action.payload);
    }
    case ActionTypes.FEED: {
      return animals.map((animal) => {
        if (animal.id === +action.payload) {
          animal.isFed = true;
          animal.lastFed = new Date(Date.now()).toString();
        }
        return animal;
      });
    }
  }
};
