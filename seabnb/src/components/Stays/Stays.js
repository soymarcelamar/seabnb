import StaysData from '../../stays.json'

export default function StaysList() {
    const data = StaysData;
    const city = 'Turku'
    let listItems = data.filter(filterData => filterData.city === city).map(filterData =>  
    <li key = {filterData.city}>
        <div className="Stays">
            <img src={filterData.photo} className="Stay-picture" alt="Stay Picture" />
                <div className="Stay-Features">
                    <p>{filterData.superHost}</p>
                    <p>{filterData.type}</p>
                    <p>{filterData.beds}</p>
                    <p>{filterData.rating}</p>
                </div>
            <p>{filterData.title}</p>
        </div>
    </li>
    );
    return (
        <section>
            <h1>Stays in {data[0].country}</h1>
            <ul>{listItems}</ul>
        </section>
    )
  };