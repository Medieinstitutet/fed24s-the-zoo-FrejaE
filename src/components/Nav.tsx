import { IconButton, Box } from "@mui/material";
export const Nav = () => {
  return (
    <IconButton edge="end" color="inherit" aria-label="menu">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "20px",
          width: "25px",
        }}
      >
        <span
          style={{ height: "3px", background: "white", borderRadius: "2px" }}
        />
        <span
          style={{ height: "3px", background: "white", borderRadius: "2px" }}
        />
        <span
          style={{ height: "3px", background: "white", borderRadius: "2px" }}
        />
      </Box>
    </IconButton>
  );
};
