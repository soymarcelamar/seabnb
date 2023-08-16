import logo from "../../assets/img/logo.png";

import searchIcon from "../../assets/img/searchIcon.png";

const Home = ({ onClickMod }) => {
  return (
    <div className="Home">
     <a href="/"> <img src={logo} alt="logo"/></a>
      <div className="Search">
        <input
          className="Search-Input"
          type="search"
          placeholder="Location"
          onClick={onClickMod}
        />
        <input
          className="SearchbarInput"
          type="search"
          placeholder="Guest"
          onClick={onClickMod}
        />
        <img className="searchIcon" src={searchIcon} alt="Search icon" onClick={onClickMod} />
      </div>
    </div>
  );
};

export default Home;
  