import { Box } from "@mui/material";

import InformationCard from "../InformationCard/InformationCard";
import PictureCard from "../PictureCard/PictureCard";

const Card = ({ superHost, type, title, beds, rating, image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: '395px',
        height: '400px',
        padding: '0 15px',
        float: 'left',
        overflow: 'hidden',
      }}>
      <PictureCard src={image} />
      <InformationCard
        superHost={superHost}
        type={type}
        beds={beds}
        rating={rating}
        title={title}
      />
    </Box>
  );
};

export default Card;