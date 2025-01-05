import React, {useState} from "react";

function App() {

  // Set up state variable for the text;
  const [inputText, setInputText] = useState(" ");
  // Set up state variable fot the array of content to be mapped and rendered. Initialized to an empty array. 
  const [items, setItems] = useState([]);

  // set up the function that performs the feature
  function handleChange(event){
    //Tap into the event value
    const newValue = event.target.value
    setInputText(newValue)
  }

  //Set up function to handle the push to the list
  function addItem(){
      setItems((prevItems) => {
        return [...prevItems, inputText]
  });
  setInputText(" "); 

}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">

        <input 
          type="text" 
          value={inputText}
          onChange={handleChange}
          />

        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>


      <div>
        <ul> {items.map((toDoItem) =>{
                return <li>{toDoItem}</li>;})}

        </ul>
      </div>
    </div>
  );
}

export default App;
