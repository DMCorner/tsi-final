import { useState, useEffect } from 'react'


function SingleFA(search) {
    const [filmsactors, setFilmsActors] = useState(null);
    const [searchresults, setSearchresults] = useState(null);

     useEffect(() => {
    fetch('http://localhost:8080/home/getallfilms&actors')
    .then(res => {return res.json();})
    .then(filmactordata => {
        console.log(filmactordata)
        setFilmsActors(filmactordata)
    })},[]);
    let searchArray = [];
    for (let i = 0; i < filmsactors; i++) {
        if (filmsactors[1].film_id = search) {
        console.log(filmsactors[1])
        searchArray.add(filmsactors[1])
        }
    } 
    return searchArray 
}

export default SingleFA;