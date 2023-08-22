import React, { useState } from 'react';
import './Testimonials.css';
import testimonialData from '../../data/testimonialsData';

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
            </div>

            <div className="right-t">
                
            </div>
        </div>
    )
}

export default Testimonials;