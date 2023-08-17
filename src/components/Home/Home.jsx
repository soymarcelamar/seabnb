import { Box } from "@mui/material";

import logo from "../../assets/img/logo.png";

import searchIcon from "../../assets/img/searchIcon.png";

const Home = ({ onClickMod }) => {
  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}
    >
      <a href="/"> <img src={logo} alt="logo" width='120px' /></a>
      <Box sx={{
        display: 'flex',
        maxWidth: '300px',
        alignItems: "center",
        justifyContent: 'space-around',
      }}>
        <Box
          component="input"
          sx={{
            border: '1px solid #D7137F',
            borderRadius: '25px',
            height: '35px',
            textAlign: 'center',
            fontFamily:'Monserrate',
          }}
          className="Search-Input"
          type="search"
          placeholder="Helsinki, Finland"
          onClick={onClickMod}
        />
        <Box
          component="input"
          sx={{
            border: '1px solid #D7137F',
            borderRadius: '25px',
            height: '35px',
            width: '100px',
            textAlign: 'center',
            fontFamily:'Monserrate',
          }}
          className="SearchbarInput"
          type="search"
          placeholder="Add Guest"
          onClick={onClickMod}
        />
        <Box component="img" className="searchIcon" src={searchIcon} alt="Search icon" onClick={onClickMod} />
      </Box>
    </Box>
  );
};

export default Home;
  