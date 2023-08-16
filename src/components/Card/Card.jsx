import InformationCard from "../InformationCard/InformationCard";
import PictureCard from "../PictureCard/PictureCard";

const Card = ({ superHost, type, title, beds, rating, image }) => {
  return (
    <div className= "card">
      <PictureCard src={image} />
      <InformationCard
        superHost={superHost}
        type={type}
        beds={beds}
        rating={rating}
        title={title}
      />
    </div>
  );
};

export default Card;