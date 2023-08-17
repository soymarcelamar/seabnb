import data from "../../stays.json";
import locationIcon from "../../assets/img/locationIcon.png";

import { Box } from "@mui/material";

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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap:'wrap',
                justifyContent: 'center',
                alignItems: 'baseline',
                padding: '25px',
            }}
        >
            <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '200px',
                }}
            >
                <Box component="input"
                    sx={{
                        border: '1px solid #D7137F',
                        borderRadius: '25px',
                        height: '35px',
                        width: '300px',
                        textAlign: 'center',
                        fontFamily: 'Monserrate',
                    }}
                    value={location}
                    onChange={handleLocation}
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Helsinki, Finland"
                    />
                {buttonSearchArray.map((element) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <img className="location-icon" alt="Location icon" src={locationIcon} />
                        <Box component="input" 
                            sx={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                fontFamily: 'Monserrate'
                            }}
                            type="button"
                            onClick={() => onClickNav(element)}
                            value={element}
                        /> 
                    </Box>
                ))}
            </Box>
            <Box
             sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '25px',
            }}>
                <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '200px',
                }}
            >
                <Box component="input"
                    sx={{
                        border: '1px solid #D7137F',
                        borderRadius: '25px',
                        height: '35px',
                        width: '300px',
                        textAlign: 'center',
                        fontFamily: 'Monserrate',
                    }}
                        value={adultsTotal + childrenTotal}
                        />
                    <Box
                        sx={{
                            fontFamily: 'Monserrate',
                            fontSize: '14px'
                        }}
                    >
                        <label>Adult </label>
                        <span>Ages 13 or above</span>
                        <Box sx={{ padding:'5px' }}>
                            <Box component="button"
                                sx={{
                                    border: 'none',
                                    backgroundColor: '#D7137F',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '25px',
                                    height: '25px',
                                }}  
                                type="button"
                                onClick={adultsLess}
                                disabled={adultsTotal <= 0}
                            >
                                -
                            </Box>
                            <Box component="input"
                                sx={{
                                    width: '25px',
                                    border: 'none',
                                    textAlign: 'center',
                                }}
                                value={adultsTotal} />
                            <Box component="button"
                                sx={{
                                    border: 'none',
                                    backgroundColor: '#D7137F',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '25px',
                                    height: '25px',
                                }}   
                                type="button"
                                onClick={adultsPlus}
                            >
                                +
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            fontFamily: 'Monserrate',
                            fontSize: '14px'
                        }}
                    >
                        <label>Children </label>
                        <span>Ages 2-12</span>
                        <Box sx={{ padding:'5px' }}>
                        <Box component="button"
                                sx={{
                                    border: 'none',
                                    backgroundColor: '#D7137F',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '25px',
                                    height: '25px',
                                }}
                                type="button"
                                onClick={childrenLess}
                                disabled={childrenTotal <= 0}
                            >
                                -
                            </Box>
                            <Box component="input"
                                sx={{
                                    width: '25px',
                                    border: 'none',
                                    textAlign: 'center',
                                }}
                                value={childrenTotal} />
                            <Box component="button"
                                sx={{
                                    border: 'none',
                                    backgroundColor: '#D7137F',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '25px',
                                    height: '25px',
                                }}  
                                type="button"
                                onClick={childrenPlus}
                            >
                                +
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div>
            <Box component="button"
                sx={{
                    border: 'none',
                    backgroundColor: '#D7137F',
                    color: 'white',
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px',
                    }}  
                    onClick={offModal}>
                X
            </Box>
            </div>
        </Box>
    );
};
export default Search;