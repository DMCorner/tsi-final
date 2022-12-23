import React from 'react'
import { useState, useEffect } from 'react'
import ActorList from './ActorList';
import FilmList from './FilmList';
import CategoryList from './CategoryList';
import FilmsAndActorsList from './FilmsAndActorsList';
import FilmsAndCategoriesList from './FilmsAndCategoriesList';
import SingleActor from './SingleActor';

function DataFetching() {
    const [singleactor, setSingleActor] = useState(null);
    const [actors, setActors] = useState(null);
    const [films, setFilms] = useState(null);
    const [categories, setCategories] = useState(null);
    const [filmsactors, setFilmsActors] = useState(null);
    const [filmscategories, setFilmsCategories] = useState(null);

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

    //single actor

    // useEffect(() => {
    // fetch('http://localhost:8080/home/getallactors/1')
    // .then(res => {return res.json();})
    // .then(singleactordata => {
    //     console.log(singleactordata)
    //     setSingleActor(singleactordata)
    // })},[]);

    // films

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

    // filmsactors

    useEffect(() => {
    fetch('http://localhost:8080/home/getallfilms&actors')
    .then(res => {return res.json();})
    .then(filmactordata => {
        console.log(filmactordata)
        setFilmsActors(filmactordata)
    })},[]);

    // filmscategories

    useEffect(() => {
    fetch('http://localhost:8080/home/getallfilms&categories')
    .then(res => {return res.json();})
    .then(filmcategorydata => {
        console.log(filmcategorydata)
        setFilmsCategories(filmcategorydata)
    })},[]);



  return (
    <div className="the_form">
      {/* {singleactor && <SingleActor singleactor={singleactor} title="Single Actor!" />} */}
      {/* {filmsactors && <FilmsAndActorsList filmsactors={filmsactors} title="All FilmsActors!" />} */}
      {/* {filmscategories && <FilmsAndCategoriesList filmscategories={filmscategories} title="All FilmsCategories!"/>} */}
      {actors && <ActorList actors={actors} title="All Actors!" />}
      {/* {films && <FilmList films={films} title="All Films!" />} */}
      {/* {categories && <CategoryList categories={categories} title="All Categories!"/>} */}
    </div>
  )
}

export default DataFetching
