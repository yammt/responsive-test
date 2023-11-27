import React from "react";

import "./index.scss";

const Tab = (props) => {
    const { icon, tabName } = props;

    return (
        <div className="tab">
            <div className="tab-icon">
                <img src={icon} alt={tabName} />
            </div>
            <div className="tab-name">
                {tabName}
            </div>
        </div>
    )
}

export default Tab;