import React, { useRef, useEffect, useState } from 'react';
import '../styles/CompareSection.css';
import Floor from '../assets/floor.png';
import curve from '../assets/upper-curve.png';
import podium from '../assets/podium.png';
import AmericanExpress from '../assets/express.png';
import HSBC from '../assets/hsbc.png';
import SBI from '../assets/sbi.png';
import left1 from '../assets/left1.svg'
import left2 from '../assets/left2.svg'
import right1 from '../assets/right1.svg'
import right2 from '../assets/right2.svg'
export default function CompareSection() {
    const wrapperRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.7 }
        );

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        return () => {
            if (wrapperRef.current) {
                observer.unobserve(wrapperRef.current);
            }
        };
    }, []);

    return (
        <div className='compare-wrapper'>
            <h2>Compare Cards</h2>
            <div className='video-wrapper' ref={wrapperRef}>
                <img src={curve} alt='' className='upper-curve' />
                <img src={curve} alt='' className='lower-curve' />
                <img className='podium' src={podium} alt='' />
                <img className='express' src={AmericanExpress} alt='' />
                <img className='hsbc' src={HSBC} alt='' />
                <img className='sbi' src={SBI} alt='' />
                <video autoPlay muted loop className="compare-vid">
                    <source src="golden_podium.mp4" type="video/mp4" />
                </video>
                <img className='floor' src={Floor} alt='' />

            </div>
            <div className='compare-lower-wrapper'>
                <p className='compare-details'>Uncover hidden benefits and find the perfect card for your financial goals.</p>
                <div className={`btn-wrapper ${isClicked ? 'clicked' : ''}`}>
                <button className={`test ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>+ Compare Now</button>
                    <img className='left1' src={left1} alt=''/>
                    <img className='left2' src={left2} alt=''/>
                    <img className='right1' src={right1} alt=''/>
                    <img className='right2' src={right2} alt=''/>
                </div>
            </div>
        </div>
    );
}