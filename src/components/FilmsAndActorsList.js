const FilmsAndActorsList = ({ filmsactors, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {filmsactors.map((filmactor) => (
                <div key={filmactor.id}>
                    <h2>{filmactor.film_id}</h2>
                    <h2>{filmactor.title}</h2>
                    <h2>{filmactor.actor_id}</h2>
                    <h2>{filmactor.first_name}</h2>
                    <h2>{filmactor.last_name}</h2>
                    {/* <button onClick={() => handleDelete(actor.id)}>Delete Actor</button> */}
                </div>
            ))}
        </div>
    )
}

export default FilmsAndActorsList