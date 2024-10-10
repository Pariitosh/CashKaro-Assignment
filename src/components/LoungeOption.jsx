import '../styles/LoungeSection.css'
import light from '../assets/bglight.png'
export default function LoungeOption({avatar,lounge}){
    return(
        <div className="lounge-option-outer">
            <div>
                <img src={avatar} alt=""/>
                <div>
                    <p className="lounge-name">Indra ghandi INTL</p>
                    <p className="lounge-location">IGI New Delhi</p>
                </div>
            </div>

            <img className="lounge-img" src={lounge} alt=""/>
            <img className='bg-light' src={light} alt=''/>
        </div>
                
    )
}