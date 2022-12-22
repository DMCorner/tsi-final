const FilmsAndCategoriesList = ({ filmscategories, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {filmscategories.map((filmcategory) => (
                <div key={filmcategory.id}>
                    <h2>{filmcategory.film_id}</h2>
                    <h2>{filmcategory.title}</h2>
                    <h2>{filmcategory.category_id}</h2>
                    <h2>{filmcategory.name}</h2>
                    {/* <button onClick={() => handleDelete(actor.id)}>Delete Actor</button> */}
                </div>
            ))}
        </div>
    )
}

export default FilmsAndCategoriesList