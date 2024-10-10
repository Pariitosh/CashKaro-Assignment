import '../styles/CardsSection.css'
import leftLines from '../assets/leftLines.png'
import rightLines from '../assets/rightLines.png'
import Regalia from '../assets/regalia.png'
import AxisBank from '../assets/axisbank.png'
import IndianOil from '../assets/indianoil.png'
import CreditCard from './CreditCard'

export default function CardsSection() {

    return (
        <>
        <div className="cards-upper">
            <div>
                <h2>Popular credit cards for every dedicated category</h2>
                <div className="cards-btn-outer">
                    <button>Featured</button>
                    <button>Cashback</button>
                    <button>Rewards</button>
                    <button>Fuel</button>
                    <button>Business</button>
                </div>
                <img src={leftLines} alt='' className='left-lines' />
                <img src={rightLines} alt='' className='right-lines' />
            </div>

        </div>

        <div className='cards-lower'>
            <CreditCard img={Regalia} title={'HDFC Regalia'}/>
            <CreditCard img={AxisBank} title={'Axis Bank Ace Credit Card'}/>
            <CreditCard img={IndianOil} title={'Indian Oil HDFC Credit Card'}/>
        </div>
        </>
    )
}