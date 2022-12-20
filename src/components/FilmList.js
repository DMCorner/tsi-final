const FilmList = ({ films, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {films.map((film) => (
                <div key={film.id}>
                    <h2>{film.film_ID}</h2>
                    <h2>{film.title}</h2>
                    <h2>{film.description}</h2>
                    {/* <button onClick={() => handleDelete(actor.id)}>Delete Actor</button> */}
                </div>
            ))}
        </div>
    )
}

export default FilmList