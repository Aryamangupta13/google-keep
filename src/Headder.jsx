import React, { useEffect, useState } from "react";
import { green, orange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Headder=()=>{
    return(
        <div className="headder">
            <Avatar sx={{ bgcolor: orange[800] }}>
                <AssignmentIcon />
            </Avatar>
            <h2 style={{paddingLeft:"10px"}}>Keep Notes</h2>
        </div>
    );
}

export default Headder;