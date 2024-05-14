import React from 'react';
import {useState} from 'react';

const Input = ({cardList, title, setTitle, description, setDescription, id, setId, editCard}) => {
    
    
    const handleTodo = ()=>{
        if(id){
            editCard(title,description, id)
            setTitle('')
            setDescription('')
            setId('')

        }
        else{
            cardList(title,description)
            setTitle('')
            setDescription('')
        }
        
        
    }

    return (
        <div className='col-12 col-sm-10 col-lg-8'>
            <h2>My To-do</h2>
            <div className="inputFieldGroup" >
            <input type="text" className='col-8 col-md-4 inputField' value={title} placeholder='Todo name' onChange={e=>setTitle(e.target.value)}/>
            <input type='text' className='col-8 col-md-4 inputField' value={description} placeholder='Description' onChange={e=>setDescription(e.target.value)}/>
            <button className='col-8 col-md-2 addTodo'  onClick={handleTodo}>Add To-Do</button>
            </div>
        </div>
    );
};

export default Input;