import NewEntryForm from "./NewEntryForm";
import { useState } from "react";



const Entrylist = () => {
    const [entries, setEntries] = useState([]);
    const addEntry = (title, image, description) => {
        setEntries([...entries, {title: title, id: entries.length+1, image: image, description: description}]);
    }
    const delEntry = () => {
        setEntries([delete entries.map])
    }

    const [dp, setDp] = useState(true);

    return (
      <div className='the_form'>
        <ul>
          {entries.map(entry => {
            return ( <div>{ dp && <div id={entry.id} key={entry.id}>
                <table class="list_entry">
                <tr>
                    <th><h1 id="list_entry_title_template" class="list_entry_title">{entry.id}) {entry.title}</h1></th>
                    <th>
                        {/* <button onClick={() => setDp(!dp)}>Delete</button> */}
                    </th>
                </tr>
                <tr>
                    <td>
                    <ul class="list_entry_image">
                        <a
                        href="https://warhammer40k.fandom.com/wiki/Emperor_of_Mankind">
                        <img
                        id="list_entry_image_template"
                        src={entry.image}
                        //   src="https://avatars.steamstatic.com/f9f9cd4bcb7e93a3ded1c472272d75b7f146da43_full.jpg"
                        alt="noImage"
                        width="200px"
                        height="200px"
                        /></a>
                    </ul>
                    </td>
                    <td>
                    <div id="list_entry_description_template" class="list_entry_description">
                        {entry.description}
                    </div>
                    </td>
                </tr>
                </table>
            </div>}</div>)
          })}
        </ul>
        <NewEntryForm addEntry={addEntry} addImage={addEntry} addDescription={addEntry} id="new-entry-form" />
      </div>
    );
  }

  export default Entrylist;