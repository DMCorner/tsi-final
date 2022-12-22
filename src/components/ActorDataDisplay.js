import React from 'react'
import { useState, useEffect } from 'react';
import ActorList from './ActorList';



function ActorDataDisplay() {
    const [actors, setActors] = useState([{"firstname":"PENELOPE","lastname":"GUINESS","actor_ID":1}]);
    const [searchActorFirstName, setSearchActorFirstName] = useState("")
    const [searchActorLastName,setSearchActorLastName] = useState("");
    

    useEffect(() => {
    fetch('http://localhost:8080/home/getallactors')
    .then(res => {return res.json();})
    .then(actordata => {
        console.log(actordata)
        setActors(actordata)
    })},[]);

    const handleFNChange = value =>  {
        setSearchActorFirstName(value);
        filterData(value)
    }

    const handleLNChange = value =>  {
        setSearchActorLastName(value);
        filterData(value)
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            setActors(actors);
        }
        else {
            const filteredData = actors.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                    // this still accepts any key. at some point maybe change it to accept specified first name or last name or key
                })
            });
            setActors(filteredData);
        }
    }

    // const searchForActorsFilms = doublevalue => {
    //     const lowerCaseValue = doublevalue.toLowerCase().trim();
    //     if (!lowerCaseValue) {
    //         setActors(actors);
    //     }
    //     else {
    //         const filteredData = actors.filter(item => {
    //             return Object.keys(item).some(lastname => {
    //                 return item[lastname].toString().toLowerCase().includes(lowerCaseValue);

    //             })
    //         });
    //         setActors(filteredData);
    //     }
    // }

    
  return (
    <div>
        Search: <input type="text" placeholder='First Name' value={searchActorFirstName} onChange={e => handleFNChange(e.target.value)}/>
        <br></br>
        Search: <input type="text" placeholder='Last Name' value={searchActorLastName} onChange={o => handleLNChange(o.target.value)}/>
        <div >
            {actors.map((actor, i) =>{
                return <div className='actor-grid-container' key={i}>
                    <div className='actor-grid-item'>Actor_ID:  </div>
                    <b className='actor-grid-item'>{actor.actor_ID + " "}</b>
                    <div className='actor-grid-item'>Firstname: </div>
                    <b className='actor-grid-item'>{actor.firstname + " "}</b>
                    <div className='actor-grid-item'>Lastname: </div>
                    <b className='actor-grid-item'>{actor.lastname + " "}</b>
                    {/* <button>See Films</button> */}
                </div>
            })}
        </div>
       
      {/* {actors && <ActorList actors={actors} title="All Actors!" />} */}
    </div>
  )
}

export default ActorDataDisplay
