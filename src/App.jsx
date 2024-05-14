import React from 'react';
import Input from './Components/Input';
import {useState} from 'react';
import Cardbody from './Components/Cardbody';


const App = () => {
  const[title,setTitle]=useState('')
  const[description, setDescription]=useState('')
  const[id, setId]=useState(0)
  
  
  const[card, setCard] = useState([{id:1,
    title: "Task A",
    description: "Description of task a is described as follows...",
    statusCode: "Not Completed",},{id:2,
      title: "Task B",
      description: "Description of task a is described as follows...",
      statusCode: "Not Completed",},{id:3,
        title: "Task C",
        description: "Description of task a is described as follows...",
        statusCode: "Not Completed",}])
  const[box, setBox] = useState([{id:1,
    title: "Task A",
    description: "Description of task a is described as follows...",
    statusCode: "Not Completed",},{id:2,
      title: "Task B",
      description: "Description of task a is described as follows...",
      statusCode: "Not Completed",},{id:3,
        title: "Task C",
        description: "Description of task a is described as follows...",
        statusCode: "Not Completed",}])
  

  const cardList = (cardTitle, cardDescription)=>{
    if(!cardTitle){
      return
    }
    else{
      let data = {
      id: box.length +1,
      title: cardTitle,
      description: cardDescription,
      statusCode: "Not Completed",
     
    }
    
    setBox([...box,data])
    setCard([...card,data])
    
    
  }

    
  }
  // console.log(card)
  const editCard = (title,description, id)=>{
    let editData = card.filter((ele)=>{
      return ele.id == id
    })
    editData[0].title = title
    editData[0].description = description
   
  }
  


  return (
    <div>
      <div className="inputZone">
      <Input cardList = {cardList} title={title} setTitle={setTitle} description={description} setDescription={setDescription} id={id} setId ={setId} editCard={editCard}/>
      </div>
      <div className="outZone">
      <Cardbody card ={card} setCard={setCard}  setTitle={setTitle} setId={setId} setDescription={setDescription} box={box} setBox ={setBox} />
      </div>
    </div>
  );
};

export default App;