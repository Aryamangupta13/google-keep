import React from "react";

const Footer=()=>{
    const d=new Date();
    var str=`copyright © ${d.getFullYear()}`
    return(
        <div className="footer">
            <p>{str}</p>
        </div>
    )
}
export default Footer;