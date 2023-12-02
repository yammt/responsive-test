import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { Slide } from "react-slideshow-image";

import 'react-slideshow-image/dist/styles.css';
import "./index.scss";

const SlideSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url('${props => props.url}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
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

    const indicators = () => <div className="indicator" />;

    return (
        <div className="creator-card">
            <div className="creator-card-main">
                <Slide arrows={false} autoplay={false} indicators={indicators}>
                    {creatorData.images.map((item, ind) => 
                        <SlideSection
                            key={ind}
                            url={item.toString()}
                            />
                    )}                
                </Slide>
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