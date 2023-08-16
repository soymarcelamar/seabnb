import Home from "./components/Home/Home";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Stays from "./components/Stays/Stays";

import  { useState, useEffect} from "react";
import data from "./stays.json";

import'./App.css';

function App() {
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState(data);
  const [adultCounter, setAdultCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const handleLocation = (e) => setLocation(e.target.value);

  const [isFiltered, setFiltered] = useState(false);
  const handleModal = () => {
    setFiltered(true);
  };    
  const closeModal = () => {
    setFiltered(false);
  };

  useEffect(() => {
    const search = data.filter(
      (cards) =>
        cards.city.toLowerCase().includes(location.toLowerCase()) 
         && cards.maxGuests >= Number(adultCounter + childrenCounter)
    );

    setBeds(search);
  }, [location, adultCounter, childrenCounter]);

  return (
    <div className="App">
      <div>
        {isFiltered ? (
          <Filter
            location={location}
            handleLocation={handleLocation}
            onClickNav={setLocation}
            offModal={closeModal}
            adultsTotal={adultCounter}
            childrenTotal={childrenCounter}
            adultsLess={() => setAdultCounter(adultCounter - 1)}
            adultsPlus={() => setAdultCounter(adultCounter + 1)}
            childrenLess={() => setChildrenCounter(childrenCounter - 1)}
            childrenPlus={() => setChildrenCounter(childrenCounter + 1)}
          />
        ) :
          <Home onClickMod={handleModal} />}
      </div>
      <div>
        <Stays count={beds.length} />
        <section className= "CardContainer">
          {beds.map((cards) => (
            <Card
              key={cards.id}
              image={cards.photo}
              superHost={cards.superHost}
              type={cards.type}
              beds={cards.beds}
              rating={cards.rating}
              title={cards.title}
            />
          ))}
        </section>
       
      </div>
    </div>
  );
}

export default App;