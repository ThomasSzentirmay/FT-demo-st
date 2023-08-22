import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';

const Plans = () => {
    return (
        <div className="plans-container">
            {/* Plans Text */}
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            {/* Plans Cards */}
            <div className="plans">
                {plansData.map((plan, i) => {
                    return (
                        <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Plans;