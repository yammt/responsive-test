import React, { useState, useRef } from 'react';
import PageSeperator from '../PageSeperator';
import './index.scss';

const JumpBackIn = () => {
	const images = [
		{
			src: "/img-melissa.png",
			alt: "Image"
		},
		{
			src: "/img-miley.png",
			alt: "Image"
		},
		{
			src: "/img-indira.png",
			alt: "Image"
		},
		{
			src: "/img-samantha.png",
			alt: "Image"
		},
		{
			src: "/img-sharan.png",
			alt: "Image"
		},
		{
			src: "/img-melissa.png",
			alt: "Image"
		},
		{
			src: "/img-miley.png",
			alt: "Image"
		},
		{
			src: "/img-indira.png",
			alt: "Image"
		},
		{
			src: "/img-samantha.png",
			alt: "Image"
		},
		{
			src: "/img-sharan.png",
			alt: "Image"
		}
	]

	const sliderRef = useRef(null);
  const scrollAmount = 100;

	const handleRightButton = () => {
		const container = sliderRef.current;
    container.scrollLeft += scrollAmount;
	}

	const handleLeftButton = () => {
		const container = sliderRef.current;
    container.scrollLeft -= scrollAmount;
	}

	return (
		<div className="jump-back-in">
			<PageSeperator
				seperatorName="Jump Back In"
				isButtonAvailable={true}
				handleLeftButton={handleLeftButton}
				handleRightButton={handleRightButton}
			/>
			<div className="images-container" ref={sliderRef}>
        {images.map((image, ind) => (
            <img
				key={ind}
              	className="image"
              	alt="sliderImage"
              	src={image?.src}
            />
          ))}
      </div>
		</div>
	)
}



export default JumpBackIn;