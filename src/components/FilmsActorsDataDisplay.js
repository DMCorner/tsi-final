import React from 'react'
import { useState, useEffect } from 'react';
import FilmsAndActorsList from './ActorList';



function FilmsActorsDataDisplay() {
    const [filmsactors, setFilmsActors] = useState([{"first_name":"PENELOPE","actor_id":1,"last_name":"GUINESS","title":"ACADEMY REPTILES","film_id":1}]);
    const [searchfilmsactors1,setSearchfilmsactors1] = useState("");
    const [searchfilmsactors2,setSearchfilmsactors2] = useState("");

    useEffect(() => {
    fetch('http://localhost:8080/home/getallfilms&actors')
    .then(res => {return res.json();})
    .then(filmactordata => {
        console.log(filmactordata)
        setFilmsActors(filmactordata)
    })},[]);

    const handleChange1 = value =>  {
        setSearchfilmsactors1(value);
        filterData(value)
    }

    const handleChange2 = value =>  {
        setSearchfilmsactors2(value);
        filterData(value)
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            setFilmsActors(filmsactors);
        }
        else {
            const filteredData = filmsactors.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setFilmsActors(filteredData);
        }
    }

    
  return (
    <div>
        Search: <input type="text" placeholder='Value 1' value={searchfilmsactors1} onChange={e => handleChange1(e.target.value)}/>
        <br></br>
        Search: <input type="text" placeholder='Value 2' value={searchfilmsactors2} onChange={o => handleChange2(o.target.value)}/>
        <div >
            {filmsactors.map((filmactor, i) =>{
                return <div className='film-actor-grid-container' key={i}>
                    <div>
                        <b>Actor_id:</b><br/>
                        <b>first_name: </b><br/>
                        <b>last_name: </b><br/>
                        <b>film_id: </b><br/>
                        <b>title:</b><br/>
                    </div>
                    <div>
                        <b>{filmactor.actor_id + " "}</b><br/>
                        <b>{filmactor.first_name + " "}</b><br/>
                        <b>{filmactor.last_name + " "}</b><br/>
                        <b>{filmactor.film_id + " "}</b><br/>
                        <b>{filmactor.title + " "}</b><br/>
                    </div>
                </div>
            })}
        </div>
      {/* {actors && <ActorList actors={actors} title="All Actors!" />} */}
    </div>
  )
}

export default FilmsActorsDataDisplay
