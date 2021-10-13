import React, { useEffect, useState } from 'react';
import logo from './images/logo.svg'
import girl from './images/girl.jpg'
import IntroOverlay from './IntroOverlay';
import gsap from 'gsap';

import Validation from './Validation';


// gsap 3
const Content = () => {

    const [values, setValues] = useState({
        emai:''
    });

    const [errors, setErrors] = useState({})

    const handleSubmit=(event)=>{
        event.preventDefault()
        setErrors(Validation(values));
    }

    const handleChange =(event) =>{
        setValues({
            ...values,
            [event.target.name]:event.target.value
        })
    }

    useEffect(()=>{

        // Setting the visibility to prevent flashing
        gsap.to("body", 0, { css: {visibility: "visible"}})

        // timeline
        const tl = gsap.timeline();

        tl.staggerFrom(".hero-content-line",1,{
            scale: 1.8,
            y:100,
            x:50,
            ease: 'power4.out',
            opacity:0,
            delay: 0.8,
            // skewY:7,
            // skewX:3,
            stagger:{
                amount: 0.3
            }
        }, 'start')
        .to(".overlay-right", 1.6,{
            width:0,
            ease: "expo.inOut",
            stagger: 0.4
        }, .15, 'start')
        .from('.hero-logo', 1, {y:-50, opacity: 0, ease: 'power3.easeOut'}, 1.4)
        .from('p', 1, {y: 20, opacity: 0, scale: 1.4, ease: 'Power3.easeOut'}, 1.4)
        .from('.subscribe-btn', 1, {y:20, opacity:0, ease: 'Power3.easeOut'}, 1.6)
        .from('.subscribe', 1, {y:20, opacity:0, ease: 'Power3.easeOut'}, 1.5)
        .from('.img-container img', 1.5, {scale: 1.4, ease: "expo.inOut", delay: -2, stagger:{amount:0.4}});
        

    }, []);

    return ( 
        <div className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner">
                            <div className="hero-logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-span">WE'RE</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">COMING</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">SOON</div>
                                </div>
                            </h1>
                            <p>Hello fellow shoppers! We're currently building our new
                            fashion store. Add your email below to stay up-to-date
                            with announcements and our launch deals.</p>
                            <div className="subscribe-btn">
                                <input 
                                type="text" 
                                placeholder='Email Address' 
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                />

                                <button 
                                onClick={handleSubmit}
                                className='subscribe'>GO</button>
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                        </div>
                    </div>

                    
                    
                    <>
                         
                    <div className="img-container">
                        <IntroOverlay/> 
                        <img src={girl} alt="girl" />
                    </div>
                    </> 
                    
                </div>
            </div>
        </div>
     );
}
 
export default Content;