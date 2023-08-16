import startIcon from '../../assets/img/starIcon.png'

const InformationCard = ({ superHost, type, title, beds, rating }) => {

    if (superHost === false) {
      (superHost = null)
    } else if 
      (superHost === true) {
        (superHost = <span className="Superhost">SUPER HOST</span> )
    }
  
    return (
      <div className="Information-card">
        <div className="Information-card-container">
          <span className="Information-key">{superHost} {type} {beds > 0 && <>. {beds} beds</>}</span>
            <div className="rating-container">
            <span className="rating"><img src={startIcon} alt="Rating with start icon" srcset="" />{rating}</span>
          </div>
        </div>
        <div className="title">
          {title}
        </div>
      </div>
    );
  };
  
  export default InformationCard;