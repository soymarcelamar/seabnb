
import { Box } from "@mui/material";

const PictureCard = ({ src }) => {
    return (
        <Box
            component="img"
            sx={{
                width: '395px',
                height: '269px',
                borderRadius: '24px',
                objectFit: 'cover',
            }}
            src={src} alt="Stay cover"
        >
        </Box>
    );
};

export default PictureCard;