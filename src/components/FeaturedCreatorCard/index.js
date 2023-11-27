import React, { useState } from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

import "./index.scss";

const SlideSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    border-radius: var(--corner-radius-rounded-2-xl, 16px) var(--corner-radius-rounded-2-xl, 16px) 0px 0px;
    padding: var(--space-4, 16px) var(--space-4, 16px) var(--spacing-2, 8px) var(--space-4, 16px);
    height: 312px;
`;

const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(210, 55, 93, 1);
    border-radius: 16px;
    color: white;
    gap: 8px;
    padding: 16px 32px;
    height: 48px;
    width: 99px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: none;
    &:hover {
      background-color:  rgba(210, 55, 93, 0.8) ;
  }
`

const CreatorInfoFotterButton = (props) => {
    const { title } = props;

    return (
        <div className="creator-info-footer-button">
            <img 
                src="/icon-fire.svg"
                alt="icon"
            />
            <div className="creator-info-footer-button-title">
                {title}
            </div>
        </div>
    )
}

const FeaturedCreatorCard = (props) => {
    const { creatorData } = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeSlide = creatorData.images[currentIndex];

    const handleSlideLeft = () => {
        setCurrentIndex((prevCurrentIndex) => {
            if(prevCurrentIndex === 0) return creatorData.images.length - 1;
            else return prevCurrentIndex - 1;
        })
    }

    const handleSlideRight = () => {
        setCurrentIndex((prevCurrentIndex) => {
            if(prevCurrentIndex == creatorData.images.length - 1) return 0;
            else return prevCurrentIndex + 1;
        })
    }

    // const modifyThirdIndicator = () => {
    //     const indicators = document.querySelectorAll('.creator-card-slide-indicator .indicator');
    //     const currentIndicator = indicators[currentIndex];
    //     currentIndicator.style.backgroundColor = "red";
    // };

    // modifyThirdIndicator();
    return (
        <div className="creator-card">
            <SlideSection
                url={`"${activeSlide.toString()}"`}
            >
                <div className="creator-card-slide-header">
                    <div className="creator-card-slide-favorite">
                        <img
                            src="/icon-favourite.svg"
                            alt="chat icon"
                            width={"13.3px"}
                        />
                    </div>
                </div>
                <div className="creator-card-slide-footer">
                    <div className="creator-card-slide-indicator">
                        { [ ...Array(5).keys() ].map( i => <div key={i} className={`indicator${i === currentIndex ? "-active" : "" }`}></div> )}
                    </div>
                    <div>
                        <StyledButton>
                            <img
                                src="/icon-chat.svg"
                                alt="home icon"
                                width={"20px"}
                            />
                            <span>Chat</span>
                        </StyledButton>
                    </div>
                </div>
                <div className="slide-button-left" onClick={handleSlideLeft}>
                </div>
                <div className="slide-button-right" onClick={handleSlideRight}>
                </div>

            </SlideSection>
            <div className="creator-card-footer">
                <div className="creator-name">
                    {creatorData.name}
                </div>
                <div className="creator-info">
                    <div className="creator-info-token-rate">
                        1 token / min
                    </div>
                    <div className="creator-info-other">
                        <CreatorInfoFotterButton 
                            title="NSFW"
                        />
                        <CreatorInfoFotterButton 
                            title="Caring"
                        />
                        <CreatorInfoFotterButton 
                            title="New"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCreatorCard;