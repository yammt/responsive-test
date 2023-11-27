import React from "react";

import "./index.scss"

const CustomButton = (props) => {
    const { icon, isNotification, count, onClick } = props;

    return (
        <div className="custom-button" onClick={onClick} >
            {
                isNotification?
                <div className="notification">
                    {count}
                </div>
                :null
            }            
            <img 
                src={icon}
                alt="icon"
            />
        </div>
    )
}

export default  CustomButton;