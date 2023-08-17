import { Box } from "@mui/material";

const Stays = ({ count }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'Row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '11px',
        fontFamily: 'Monserrate',
        padding: '20px',

      }}
    >
      <h2>Stays in Finland</h2> 
      <h2 className= "StaysNumber">  {count}+ stays</h2>
    </Box>
  );
};

export default Stays;