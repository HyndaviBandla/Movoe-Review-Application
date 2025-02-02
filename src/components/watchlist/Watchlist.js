import React, { useState } from "react";
import "./Watchlist.css";
import { useAuth0 } from "@auth0/auth0-react";
function Watchlist() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const { isAuthenticated, user } = useAuth0;
  const yourName = isAuthenticated ? user.name : "your";

  return (
    <div className="container">
      <div className="heading">
        <h1> {yourName} watch list</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button className="addbtn" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Watchlist;
// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

// function App() {
//   const [notes, setNotes] = useState([]);

//   function addNote(newNote) {
//     setNotes(prevNotes => {
//       return [...prevNotes, newNote];
//     });
//   }

//   function deleteNote(id) {
//     setNotes(prevNotes => {
//       return prevNotes.filter((noteItem, index) => {
//         return index !== id;
//       });
//     });
//   }

//   return (
//     <div>
//       <Header />
//       <CreateArea onAdd={addNote} />
//       {notes.map((noteItem, index) => {
//         return (
//           <Note
//             key={index}
//             id={index}
//             title={noteItem.title}
//             content={noteItem.content}
//             onDelete={deleteNote}
//           />
//         );
//       })}
//       <Footer />
//     </div>
//   );
// }

// export default App;
