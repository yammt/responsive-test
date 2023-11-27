import React from "react";
import CustomButton from "../CustomButton";

import "./index.scss";

const SearchBar = () =>
    <div className="search-bar">
        <div className="search-bar-input">
            <img 
                src="/icon-search.svg"
            />
            <input 
                type="text"
                placeholder="Search"
                className="custom-input"
            />
        </div>
        <div className="search-bar-button">
            <CustomButton 
                icon="/icon-list.svg"
                isNotification={false}
            />
        </div>
    </div>

export default SearchBar;