import React, { useEffect, useState } from "react";
import Headder from "./Headder";
import Footer from './Footer'
import CreateNode from "./CreateNote";
import './App.css'
import Note from './Note.jsx'


const App=()=>{
    const [notesarray,setnotesarray]=useState([]);
    
    const arradd=(newnote)=>{
        setnotesarray((old)=>{
            return [
                ...old,newnote
            ]
        })
    }
    const deletearr=(keypass)=>{
        console.log(keypass);
        setnotesarray((old)=>
            old.filter((currdata,indx)=>{
                return indx!=keypass;}))
    }
    return(
        <>
            <Headder/>
            <br/>
            <CreateNode passednote={arradd}/>
            <br/>
            <div className="my_notes">
                {
                    notesarray.map((val,ind)=>{
                        return(
                          <Note key={ind}
                                id={ind}
                                title={val.title}   
                                content={val.content}
                                eledel={deletearr}
                                />
                        );
                    })
                } 
            </div>
            <br/>
            <Footer/>
        </>
    );
}

export default App;