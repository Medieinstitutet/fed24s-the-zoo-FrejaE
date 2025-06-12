import { Box, Button, Typography } from "@mui/material";
import { FrontPageCard } from "../components/FrontPageCard";
import { useNavigate } from "react-router";

//Här är startsida
//TODO Förändra knappen. länk till korten efter hero. knapp ska även vara importerad frfån mina egna knappar
// https://plus.unsplash.com/premium_photo-1667595645105-469e12563830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
export const Home = () => {
  const navigate = useNavigate();
  const goToAnimals = () => {
    navigate(`/animals`);
  };
  const goToUnderConstruction = () => {
    navigate(`/underConstruction`);
  };
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1667595645105-469e12563830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
          px: 2,
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          {" "}
          Mata, besök och upptäck
        </Typography>

        <Button variant="contained" color="primary" size="large">
          Läs mer
        </Button>
      </Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          padding: "4rem",
        }}
      >
        Aktuellt
      </Typography>
      <FrontPageCard
        image="http://4.bp.blogspot.com/-CpZaO5XQCt4/UQgxb5yUBHI/AAAAAAAAA4Y/MXRHxFuPEQ4/s1600/Hamster_2.jpg"
        handleClick={goToAnimals}
        heading={"Mata djuren"}
        desc={"Håll koll på djuren!"}
      />
      <FrontPageCard
        image="http://4.bp.blogspot.com/-CpZaO5XQCt4/UQgxb5yUBHI/AAAAAAAAA4Y/MXRHxFuPEQ4/s1600/Hamster_2.jpg"
        handleClick={goToUnderConstruction}
        heading={"Bygg boenden till djuren"}
        desc={"Lär dig om hur djuren trivs bäst och vad dom behöver i sitt bo."}
      />
      <FrontPageCard
        image="http://4.bp.blogspot.com/-CpZaO5XQCt4/UQgxb5yUBHI/AAAAAAAAA4Y/MXRHxFuPEQ4/s1600/Hamster_2.jpg"
        handleClick={goToUnderConstruction}
        heading={"Klappa och krama"}
        desc={"Se till att djurens närhet är mättat och att dom mår bra"}
      />
    </>
  );
};
