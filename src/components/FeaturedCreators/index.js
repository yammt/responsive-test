import React from "react";

import PageSeperator from "../PageSeperator";
import FeaturedCreatorCard from "../FeaturedCreatorCard";
import "./index.scss";

const FeaturedCreator = () => {
    const featuredCreatorList = [
        {
            name: "Julia Rose",
            images: [
                "/img (1).jpg",
                "/img (2).jpg",
                "/img (3).jpg",
                "/img (4).jpg",
                "/img (5).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (2).jpg",
                "/img (3).jpg",
                "/img (4).jpg",
                "/img (5).jpg",
                "/img (6).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (3).jpg",
                "/img (4).jpg",
                "/img (5).jpg",
                "/img (6).jpg",
                "/img (7).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (4).jpg",
                "/img (5).jpg",
                "/img (6).jpg",
                "/img (7).jpg",
                "/img (8).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (5).jpg",
                "/img (6).jpg",
                "/img (7).jpg",
                "/img (8).jpg",
                "/img (9).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (6).jpg",
                "/img (7).jpg",
                "/img (8).jpg",
                "/img (9).jpg",
                "/img (10).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (1).jpg",
                "/img (2).jpg",
                "/img (3).jpg",
                "/img (4).jpg",
                "/img (5).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (2).jpg",
                "/img (3).jpg",
                "/img (4).jpg",
                "/img (5).jpg",
                "/img (6).jpg",
            ]
        },
        {
            name: "Julia Rose",
            images: [
                "/img (3).jpg",
                "/img (4).jpg",
                "/img (5).jpg",
                "/img (6).jpg",
                "/img (7).jpg",
            ]
        },
        
    ]
    return (
        <div className="feautred-creator">
            <PageSeperator 
                seperatorName="Featured Creators"
                isButtonAvailable={false}
            />
            <div className="featured-creator-list">
                {
                    featuredCreatorList.map((item, ind) => (
                        <FeaturedCreatorCard 
                            key={ind}
                            creatorData={item}
                        />
                    ))
                }
            </div>
        </div>
   ) 
}

export default FeaturedCreator;