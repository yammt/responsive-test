import React from "react";
import CustomButton from "../CustomButton"

import "./index.scss";

const PageSeperator = (props) => {
    const { seperatorName, isButtonAvailable, handleLeftButton, handleRightButton } = props;
    return (
        <div className="page-seperator">
            <div className="page-seperator-name">
                {seperatorName}
            </div>
            {
                isButtonAvailable ?
                <div className="page-seperator-line"> </div>
                :
                <div className="page-seperator-line-no-button"> </div>
            }
            {
                isButtonAvailable ?

                <div className="page-seperator-buttons">
                    <CustomButton 
                        icon="/icon-left.svg"
                        isNotification={false}
                        onClick={handleLeftButton}
                    />
                    <CustomButton 
                        icon="/icon-right.svg"
                        isNotification={false}
                        onClick={handleRightButton}
                    />
                </div>
                : null
            }
        </div>
    )
}

export default PageSeperator;