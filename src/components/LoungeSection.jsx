import '../styles/LoungeSection.css'
import LoungeAvatar1 from '../assets/loungeAvatar1.png'
import LoungeAvatar2 from '../assets/loungeAvatar2.png'
import LoungeAvatar3 from '../assets/loungeAvatar3.png'
import LoungeOption from './LoungeOption'
import Lounge1 from '../assets/lounge1.png'
import Lounge2 from '../assets/lounge2.png'
import Lounge3 from '../assets/lounge3.png'
export default function LoungeSection() {
    return (
        <div className="lounge-wrapper">
            <div className="lounge-upper">
                <h2>Lounge Finder</h2>
                <p>Check which lounges you can access at a click!</p>
                <button>Try Lounge Finder</button>
            </div>

            <div className='lounge-lower'>
                <LoungeOption avatar={LoungeAvatar1} lounge={Lounge1}/>
                <LoungeOption avatar={LoungeAvatar2} lounge={Lounge2}/>
                <LoungeOption avatar={LoungeAvatar3} lounge={Lounge3}/>
            </div>
        </div>
    )
}