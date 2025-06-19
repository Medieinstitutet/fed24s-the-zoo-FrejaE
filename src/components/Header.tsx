import { Link } from "react-router";
import { Nav } from "./Nav";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "40px", height: "100px" }} />
          <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              The Zoo
            </Typography>
          </Link>
          <Nav />
        </Toolbar>
      </AppBar>
    </>
  );
};
