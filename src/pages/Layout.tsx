import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { AnimalContext } from "../contexts/AnimalContext";
import { useEffect, useReducer } from "react";
import { ActionTypes, AnimalReducer } from "../reducers/AnimalReducer";
import { useFetch } from "../hooks/useFetch";
import type { IAnimal } from "../models/IAnimal";

export const Layout = () => {
  const [animals, dispatch] = useReducer(AnimalReducer, []);
  const [loading, response] = useFetch<IAnimal[]>(
    "https://animals.azurewebsites.net/api/animals"
  );

  useEffect(() => {
    if (response) {
      dispatch({
        payload: JSON.stringify(response),
        type: ActionTypes.ALL_ANIMALS,
      });
    }
  }, [response, loading]);

  return (
    <AnimalContext.Provider value={{ animals, dispatch, loading }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </AnimalContext.Provider>
  );
};
