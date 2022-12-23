const SingleActor = ({ singleactor, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {singleactor.map((actor) => (
                <div key={actor.id}>
                    <h2>{actor.actor_ID}</h2>
                    <h2>{actor.firstname}</h2>
                    <h2>{actor.lastname}</h2>
                    {/* <button onClick={() => handleDelete(actor.id)}>Delete Actor</button> */}
                </div>
            ))}
        </div>
    )
}

export default SingleActor