import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState, useEffect} from 'react'
import NewEntryForm from './NewEntryForm'
import EntryList from './EntryList'
import DataFetching from './components/DataFetching';
import axios from 'axios';
import DataDisplay from './components/DataDisplay';
import ActorDataDisplay from './components/ActorDataDisplay';
import FilmsActorsDataDisplay from './components/FilmsActorsDataDisplay';


  let newTitle = "placeholder"
  let newImage = "tinyurl.com/57ynrjuj"
  let newDescription = "placeholder"



  function template_assigner() {
        newTitle = document.getElementById("title").value;
        newImage = document.getElementById("image").value;
        newDescription = document.getElementById("description").value;

        console.log("template_assigner")
        document.getElementById("list_entry_title_template").innerHTML = newTitle;
        console.log("shane")
        console.log(newImage)
        document.getElementById("list_entry_image_template").src = newImage;
        document.getElementById("list_entry_description_template").innerHTML = newDescription;

        console.log("title " + newTitle);
        console.log("image");
        console.log(newImage);
        console.log("image2")
        console.log(document.getElementById("list_entry_image_template").src)
        console.log("desc " + newDescription);
        }







const Entryform = () => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(title);
    }

    const handleClick = (e) => {
      // setName(document.getElementById("title").innerHTML)
    }

  
  
    return (
      <div >
        Add an entry
            <form className='the_form' handleSubmit>
                <label >Title:</label>
                <input type="text" id="title" value={title} required onChange={(e) => setTitle(e.target.value) }/>
                <label >Image:</label>
                <input type="text" id="image" />
                <label >Description:</label>
                <input type="text" id="description"/>
            </form>
            <button  
            onClick={handleClick}>Update Template</button>
            <table class="list_entry">
      <tr>
        {/* <th><h1 id="list_entry_title_template" class="list_entry_title">{name}</h1></th> */}
        <th></th>
      </tr>
      <tr>
        <td>
          <ul class="list_entry_image">
            <a
              href="https://warhammer40k.fandom.com/wiki/Emperor_of_Mankind">
              <img
              id="list_entry_image_template"
              src="https://avatars.steamstatic.com/f9f9cd4bcb7e93a3ded1c472272d75b7f146da43_full.jpg"
              alt="noImage"
              width="200px"
              height="200px"
            /></a>
          </ul>
        </td>
        <td>
          <div id="list_entry_description_template" class="list_entry_description">
            {newDescription}
          </div>
        </td>
      </tr>
    </table>
      </div>
    );
  }





// class Template extends React.Component {

//   render() {
//     return (
//   <table class="list_entry">
//       <tr>
//         <th><h1 id="list_entry_title_template" class="list_entry_title">Title</h1></th>
//         <th></th>
//       </tr>
//       <tr>
//         <td>
//           <ul class="list_entry_image">
//             <a
//               href="https://warhammer40k.fandom.com/wiki/Emperor_of_Mankind">
//               <img
//               id="list_entry_image_template"
//               src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tanks_and_Afvs_of_the_British_Army_1939-45_KID1265.jpg"
//               alt="noImage"
//               width="200px"
//               height="200px"
//             /></a>
//           </ul>
//         </td>
//         <td>
//           <div id="list_entry_description_template" class="list_entry_description">
//             Description Here
//           </div>
//         </td>
//       </tr>
//     </table>
//     );
//   }
// }

// function getActorByID() {
//     fetch("http://localhost:8080/home/getallactors/1")
//     .then((res) => res.json())
//     .then((json) => 
//     console.log(json));
  



//   // const [initialActor, setInitialActor] = useState([])
//   // const addEntry = (actor_id, firstname, lastname) => {
//   //       setEntries([{actor_id: actor_id, firstname: firstname, lastname: lastname}]);
//   //   }
//   useEffect(()=>{

//   },[])


//   return (
//       <div className='the_form'>
//         <button onClick={getActorByID}>All Actors</button>
//         <br/>
//         {data.map((item) => (
//           <li key={item.id}>{item.actorid}, {item.firstname}, {item.lastname}</li>
//         ))}
//       </div>

//     );
// }




class DanDB extends React.Component {

  render() {
    return (
      <div >
        <div className='top_banner'><h2>DanDB</h2></div>
        <div class="grid-container">
          <div class="grid-item">Actor</div>
          {/* <div class="grid-item">Film</div>
          <div class="grid-item">Category</div> */}
          <div class="grid-item">FilmsActors</div>
          <div class="grid-item">Search</div>
          {/* <div class="grid-item">Film</div>
          <div class="grid-item">Category</div> */}
          <div class="grid-item">FilmsActors</div>
          <div class="grid-item"><ActorDataDisplay/></div>
          {/* <div class="grid-item">Film</div>
          <div class="grid-item">Category</div> */}
          <div class="grid-item"><FilmsActorsDataDisplay/></div>
        </div>
      </div>
    )
  }
}




class Tierlist extends React.Component {

  render() {
    return (
      <div className='center'>
        <table>
          <tr><th><h1><font color="white">Tier</font></h1></th><th><h1><font color="white">Entries</font></h1></th></tr>
          <tr><td bgcolor="#f04200">
            <h1 class="tier">S</h1></td><td className='the_form'>
              <EntryList id="S-tier"/></td></tr>
          <tr><td bgcolor="#c78900">
            <h1 class="tier">A</h1></td><td className='the_form'>
              <EntryList id="A-tier"/></td></tr>
          <tr><td bgcolor="#c4c401" >
            <h1 class="tier">B</h1></td><td className='the_form'>
              <EntryList id="B-tier"/></td></tr>
          <tr><td bgcolor="#4bc401">
            <h1 class="tier">C</h1></td><td className='the_form'>
              <EntryList id="C-tier"/></td></tr>
          <tr><td bgcolor="#4bbaea">
            <h1 class="tier">D</h1></td><td className='the_form'>
              <EntryList id="D-tier"/></td></tr>
          <tr><td bgcolor="#4b7bff">
            <h1 class="tier">E</h1></td><td className='the_form'>
              <EntryList id="E-tier"/></td></tr>
          <tr><td bgcolor="#0022b7">
            <h1 class="tier">F</h1></td><td className='the_form'>
              <EntryList id="F-tier"/></td></tr>
        </table>
      </div>
    );
  }
}

class Totaltierlist extends React.Component {
  componentDidMount() {
    document.title = "Tier List"; 
 }
  render() {
    return (
      
      <div >
        <head>
          <title>Tier List</title>
        </head>
        {/* <h1 class="test1">TSI Tier List</h1> */}
        <div >
          {/* <EntryList /> */}
          {/* <Entryform /> */}
          {/* <Messingabout/> */}
          <DanDB/>
          <Tierlist />
          {/* <DataDisplay/> */}
          <DataFetching/>
        </div>
      </div>
    );
  }
}

// ========================================


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Totaltierlist />);
