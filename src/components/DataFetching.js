import React from 'react'
import { useState, useEffect } from 'react'
import ActorList from './ActorList';
import FilmList from './FilmList';
import CategoryList from './CategoryList';

function DataFetching() {
    const [actors, setActors] = useState(null);
    const [films, setFilms] = useState(null);
    const [categories, setCategories] = useState(null);

    // const handleDelete = (id) => {
    //     const newActors = actors.filter( actor => actor.id !== id);
    //     setActors(newActors);
    // }

    //actor

    useEffect(() => {
    fetch('http://localhost:8080/home/getallactors')
    .then(res => {return res.json();})
    .then(actordata => {
        console.log(actordata)
        setActors(actordata)
    })},[]);

    // useEffect(() => {
    // fetch('http://localhost:8080/home/getallactors/1')
    // .then(res => {return res.json();})
    // .then(singleactordata => {
    //     console.log(singleactordata)
    //     setActors(singleactordata)
    // })},[]);

    //films

    useEffect(() => {fetch('http://localhost:8080/home/getallfilms')
    .then(res => {return res.json();})
    .then(filmdata => {
        console.log(filmdata)
        setFilms(filmdata)
    })},[]);

    //categories

    useEffect(() => {fetch('http://localhost:8080/home/getallcategories')
    .then(res => {return res.json();})
    .then(categorydata => {
        console.log(categorydata)
        setCategories(categorydata)
    })},[]);




  return (
    <div className="the_form">
      {actors && <ActorList actors={actors} title="All Actors!" />}
      {films && <FilmList films={films} title="All Films!" />}
      {categories && <CategoryList categories={categories} title="All Categories!"/>}
      {/* {categories && <CategoryList categories={categories} title="All Categories!"/>} */}
    </div>
  )
}

export default DataFetching
