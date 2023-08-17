import { Box } from '@mui/material';

import startIcon from '../../assets/img/starIcon.png'

const InformationCard = ({ superHost, type, title, beds, rating }) => {

  superHost === false ? (superHost = null)
    : (superHost = <Box component="span" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
      height: '20px',
      fontSize: '14px',
      fontFamily: 'Monserrate',
      fontWeight: '600',
      border: '1px solid #D7137F',
      borderRadius: '25px',
    }}>
      SUPER HOST</Box>)
  
    return (
      <Box
        sx={{
          height: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'space-between',
          alignItems: 'flex-start',
          fontFamily: 'Monserrate',
          fontSize: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '395px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box component="span" sx={{padding: '5px'}}> {superHost} </Box>
            <Box component="span" sx={{padding: '5px'}}> {type} </Box>
            <Box component="span" sx={{padding: '5px'}}> {beds > 0 && <> {beds} beds</>} </Box> 
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          > 
            <Box component="img" src={startIcon} alt="Rating with start icon" 
              sx={{
                width: '16px',
                padding: '5px',
              }}
            >
            </Box>
            <span> {rating} </span>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '395px',
            fontWeight: '800',
          }}
        >
          {title}
        </Box>
      </Box>
    );
  };
  
  export default InformationCard;