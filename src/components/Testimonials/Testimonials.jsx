import React, { useState } from 'react';
import './Testimonials.css';
import testimonialData from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialData.length;

    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                    {testimonialData[selected].name}
                    </span>{""}
                    - {testimonialData[selected].status}
                </span>
            </div>

            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialData[selected].image} alt="" />

                <div className="arrows">
                    <img src={leftArrow} alt="" />
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;