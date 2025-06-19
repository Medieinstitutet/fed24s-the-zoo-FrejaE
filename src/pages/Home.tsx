import { Box, Button, Typography } from "@mui/material";
import { FrontPageCard } from "../components/FrontPageCard";
import { useNavigate } from "react-router";

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
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Mata, besök och upptäck
        </Typography>
        <a href="#readMore">
          <Button variant="contained" color="primary" size="large">
            Läs mer
          </Button>
        </a>
      </Box>
      <Typography
        id="readMore"
        variant="h3"
        gutterBottom
        sx={{
          padding: "4rem",
          marginTop: "40px",
        }}
      >
        Aktuellt
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          paddingBottom: "200px",
        }}
      >
        <FrontPageCard
          image="http://4.bp.blogspot.com/-CpZaO5XQCt4/UQgxb5yUBHI/AAAAAAAAA4Y/MXRHxFuPEQ4/s1600/Hamster_2.jpg"
          handleClick={goToAnimals}
          heading={"Mata djuren"}
          desc={"Håll koll på djuren!"}
        />
        <FrontPageCard
          image="https://www.modellbahnshop-lippe.com/article_data/images/121/300493_c.jpg"
          handleClick={goToUnderConstruction}
          heading={"Bygg boenden till djuren"}
          desc={
            "Lär dig om hur djuren trivs bäst och vad dom behöver i sitt bo."
          }
        />
        <FrontPageCard
          image="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/493677132_2873170099510503_3163363456031965271_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7094&_nc_ohc=8XFj3LSHvCIQ7kNvwFnbx1t&_nc_oc=Adn-AqxqsOAtv6iulembX_6wn2LNhE-NKDjmJ2W-hTh-FPWq4HXkaYx7bCf5652n2w0&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=rXSH5xecCczFeQk2bn7QGw&oh=00_AfPO6BZcZmBa8ReopmYx_479hMWCSAJWUxB--sp7Axxqyw&oe=6859F51A"
          handleClick={goToUnderConstruction}
          heading={"Klappa och krama"}
          desc={"Se till att djurens närhet är mättat och att dom mår bra."}
        />
      </Box>
    </>
  );
};
