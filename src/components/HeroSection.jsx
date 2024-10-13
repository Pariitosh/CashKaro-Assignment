import '../styles/HeroSection.css'
import rectangle from '../assets/RECTANGLE.png'
import regalia from '../assets/hero-img.png'
import Card from './Card'
import offersImg from '../assets/offersIcon.png'
import rewardsImg from '../assets/rewardsIcon.png'
import cardsImg from '../assets/cardsIcon.png'
import benefitsImg from '../assets/benefitsIcon.png'
import card1Img from '../assets/card1.png'
import card2Img from '../assets/card2.png'
import card3Img from '../assets/card3.png'
import card4Img from '../assets/card4.png'

export default function HeroSection() {
    return (
        <>
        <div className='hero-wrap'>
            <div className='hero-content'>
                <h2>We find the Best</h2>
                <h2>Credit Cards for You</h2>
                <button className='figma-button'>Find A Credit Card</button>
            </div>
            <div className='video-wrapper'>
                <video autoPlay muted loop>
                    <source src="abstract-video.mp4" type="video/mp4" />
                </video>
            </div>
            <img className='hero-image' src={regalia} alt=''/>
            
        </div>
        <div className='cards-wrapper'>
        <Card image={offersImg} heading={'Personalised Offers'} details={'Find best Credit Cards based on your spend pattern'} />
        <Card image={rewardsImg} heading={'Earn Rewards'} details={'Earn Rewards for every successful Credit Card approval'} />
        <Card image={cardsImg} heading={'Compare Cards'} details={'Compare your existing Cards with best in the industry'} />
        <Card image={benefitsImg} heading={'Max Benefits'} details={'Get maximum benefits from your Credit Cards'} />
    </div>

    <div className='big-cards-outer'>
        <img src={card1Img} alt='' />
        <img src={card2Img} alt='' />
        <img src={card3Img} alt='' />
        <img src={card4Img} alt='' />
    </div>
    </>
    )
}