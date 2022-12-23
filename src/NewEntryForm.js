import react, {useState} from 'react';
import addEntry from './EntryList'

const NewEntryForm = ({ addEntry }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e,i,o) => {
        console.log("clickstart")
        console.log("title: "+ title)
        console.log("image: "+ image)
        console.log("description: " + description)
        e.preventDefault();
        addEntry(title,image,description);
        console.log("image 2: "+ image);
        setTitle('');
        setImage('');
        setDescription('');
        console.log("clickend");
    }
    return (
        <form id="input_form" className='the_form' onSubmit={handleSubmit} data-testid="todo-1">
                <label >Title:</label>
                <input id="title_button" type="text" value={title} required onChange={(e) => setTitle(e.target.value) }/>
                <label >Image:</label>
                <input id="image_button" type="text" value={image} required onChange={(i) => setImage(i.target.value.toString()) }/>
                <label >Description:</label>
                <input id="description_button" type="text" value={description} required onChange={(o) => setDescription(o.target.value) }/>
                <input id="submit_button" type="submit" value="add entry" />
            </form>
    )
}

export default NewEntryForm