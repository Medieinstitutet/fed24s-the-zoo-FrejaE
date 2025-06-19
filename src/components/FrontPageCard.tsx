import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type FrontPageProps = {
  image: string;
  heading: string;
  desc: string;
  handleClick: () => void;
};
export const FrontPageCard = (p: FrontPageProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={p.handleClick}>
        <CardMedia
          component="img"
          height="140"
          image={p.image}
          alt={p.heading}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {p.heading}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {p.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
