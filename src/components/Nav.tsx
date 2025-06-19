import { IconButton, Box, Badge } from "@mui/material";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { AnimalContext } from "../contexts/AnimalContext";
import { getAnimalStatus } from "../utils/getAnimalStatus";
import type { IAnimalExt } from "../models/IAnimal";
import { FeedIndicatorTypes } from "./FeedIndicator";
export const Nav = () => {
  const { animals } = useContext(AnimalContext);
  const [menuOn, setMenuOn] = useState(false);
  const handleClick = () => {
    setMenuOn(!menuOn);
  };
  const getBadgeContent = () => {
    let count = 0;
    animals.forEach((a: IAnimalExt) => {
      const type = getAnimalStatus(a.lastFed);
      if (
        FeedIndicatorTypes.DESPERATE === type ||
        FeedIndicatorTypes.FEED_NOW === type
      ) {
        count++;
      }
    });
    return count;
  };
  return (
    <>
      {menuOn && <Menu />}
      <Badge badgeContent={getBadgeContent()} color="warning">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
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
              style={{
                height: "3px",
                background: "white",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                height: "3px",
                background: "white",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                height: "3px",
                background: "white",
                borderRadius: "2px",
              }}
            />
          </Box>
        </IconButton>
      </Badge>
    </>
  );
};
