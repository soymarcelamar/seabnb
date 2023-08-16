const Stays = ({ count }) => {
  return (
    <div className="Stays-Header">
      <h2>Stays in Finland</h2> 
      <h2 className= "StaysNumber">  {count}+ stays</h2>
    </div>
  );
};

export default Stays;