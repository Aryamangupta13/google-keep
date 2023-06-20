import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const CreateNode=(props)=>{

    const [note,setnote]=useState({
        title:"",
        content:""
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;

        setnote((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const addEvent=()=>{
        props.passednote(note); 
        setnote({title:"",content:""});
    }

    return(
        <div className="main-box">
            <form>
                <input 
                    type="text" 
                    value={note.title}
                    name="title"
                    onChange={InputEvent}
                    placeholder="Title" 
                    autoComplete="off"
                    />
                <textarea 
                    value={note.content}
                    onChange={InputEvent}
                    rows="" 
                    column="" 
                    name="content"
                    placeholder="Write a Note"
                    />
                <div className="main-but" onClick={addEvent}>  
                    <Fab size="medium" color="warning" aria-label="add">
                        <AddIcon />
                    </Fab>  
                </div>
            </form>
        </div>
    )
}

export default CreateNode;