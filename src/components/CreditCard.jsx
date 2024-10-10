import '../styles/CardsSection.css'
import Arrow from '../assets/Arrow.png'
export default function CreditCard({ img, title }) {

    return (
        <div className='credit-card-wrapper'>
            <img className='card-img' src={img} alt='' />
            <p className='card-title'>{title}</p>
            <div className='tags'>
                <div>Travel</div>
                <div>Online Shopping</div>
            </div>
            <p className='cashback'>50% Cashback</p>
            <p className='cashback-line'>High cashback on online and offline spends</p>
            <button className='apply-now'>Apply Now <span><img className='arrow-icon' src={Arrow} alt=''/></span></button>
        </div>
    )
}