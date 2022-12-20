const CategoryList = ({ categories, title}) => {
    return (
        <div>
            <h2>{title}</h2>
            {categories.map((category) => (
                <div key={category.id}>
                    <h2>{category.category_ID}</h2>
                    <h2>{category.category_name}</h2>
                    {/* <button onClick={() => handleDelete(actor.id)}>Delete Actor</button> */}
                </div>
            ))}
        </div>
    )
}

export default CategoryList