import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import WhiteTick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'
const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className='stroke-text'>READY TO START</span>
                <span >YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            {/* plans card */}

            <div className='plans'>
                {
                    plansData.map((plan , i) => (
                        <div  className='plan' key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className='features'>
                                {
                                    plan.features.map((feature , i) => (
                                        <div className='feature' key={i}>
                                            <img src={WhiteTick} alt="" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='benefits'>
                                <span>See more benefits  </span>
                                <img src={RightArrow} alt="" />
                            </div>
                            <button className='btn'>Join Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Plans;