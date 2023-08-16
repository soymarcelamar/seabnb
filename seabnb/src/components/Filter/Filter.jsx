import data from "../../stays.json";
import locationIcon from "../../assets/img/locationIcon.png";

const Search = ({
    location,
    handleLocation,
    onClickNav,
    offModal,
    adultsTotal,
    childrenTotal,
    adultsLess,
    adultsPlus,
    childrenLess,
    childrenPlus
}) => {
    const buttonSearch = data.map((element) => element.city);
    const buttonSearchArray = [...new Set(buttonSearch)];

    return (
        <div className="Search-filter">
            <form className="form-location">
                <div className="location-container">
                    <input
                        value={location}
                        onChange={handleLocation}
                        type="text"
                        name="location"
                        id="location"
                        className="location-input"
                        placeholder="Helsinki"
                    />
                </div>
                {buttonSearchArray.map((element) => (
                    <div className="City-container">
                        <img className="location-icon" alt="Location icon" src={locationIcon} />
                        <input
                            className="city"
                            type="button"
                            onClick={() => onClickNav(element)}
                            value={element}
                        />
                    </div>
                ))}
            </form>
            <div>
                <form className="Form-guest">
                    <div className="Guest-container">
                        <label>Guest</label>
                        <input
                            className="Guest-input"
                            value={adultsTotal + childrenTotal}
                        />
                    </div>
                    <div className="Guest-number-container">
                        <label className="label">Adult</label>
                        <span>Ages 13 or above</span>
                        <div>
                            <button
                                type="button"
                                className="Less"
                                onClick={adultsLess}
                                disabled={adultsTotal <= 0}
                            >
                                -
                            </button>
                            <input className="Number-total" value={adultsTotal} />
                            <button
                                type="button"
                                className="Plus"
                                onClick={adultsPlus}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="Guest-number-container">
                        <label className="label">Children</label>
                        <span>Ages 2-12</span>
                        <div>
                            <button
                                type="button"
                                className="Less"
                                onClick={childrenLess}
                                disabled={childrenTotal <= 0}
                            >
                                -
                            </button>
                            <input className="Number-total" value={childrenTotal} />
                            <button
                                type="button"
                                className="Plus"
                                onClick={childrenPlus}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="Close">
                <button
                    className="close"
                    value="X"
                    onClick={offModal} />
            </div>
        </div>
    );
};
export default Search;