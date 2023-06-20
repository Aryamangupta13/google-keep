import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Note=(props)=>{

    const delele=(event)=>{
        props.eledel(props.id)
    }
    return(
        <div className="note">
            <h2>{props.title}</h2>
            <br/>
            <p>{props.content}</p>
            <div  className="note-but">
                <IconButton onClick={delele} aria-label="delete" color="warning" size="medium">
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Note;