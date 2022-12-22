import React from 'react'
import FilmsAndActorsList from './FilmsAndActorsList'
import { useState, useEffect } from 'react'
import SingleFA from './SingleFA';

function DataDisplay() {

    const [filmsactors, setFilmsActors] = useState(null);
    const [singlefilmsactors, setSinglefilmsactors] = useState(null);

    useEffect(() => {
    fetch('http://localhost:8080/home/getallfilms&actors')
    .then(res => {return res.json();})
    .then(filmactordata => {
        console.log(filmactordata)
        setFilmsActors(filmactordata)
    })},[]);

    useEffect(() => {
    fetch('http://localhost:8080/home/getallfilms&actors/1')
    .then(res => {return res.json();})
    .then(filmactordata => {
        console.log(filmactordata)
        setSinglefilmsactors(filmactordata[1])
    })},[]);

  return (
    <div className='the_form'>{filmsactors && <div>
        {/* {console.log(SingleFA(1))} */}
      {/* Hello */}
      {/* {console.log(filmsactors[1])} */}
      {/* {console.log(filmsactors[1].first_name)}
      {filmsactors[1].first_name}
      {filmsactors[1].last_name}
      {filmsactors[1].actor_id}
      {filmsactors[1].title}
      {filmsactors[1].film_id} */}
      {/* {singlefilmsactors} */}
      {/* <FilmsAndActorsList filmsactors={filmsactors} title="All FilmsActors!" /> */}
      {/* <SingleFA/> */}
      </div>}
    </div>
  )
}

export default DataDisplay
