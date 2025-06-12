import { Nav } from "./Nav";
import "./header.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export const Header = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "40px" }} />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            The Zoo
          </Typography>
          <Nav />
        </Toolbar>
      </AppBar>
    </>
  );
};
