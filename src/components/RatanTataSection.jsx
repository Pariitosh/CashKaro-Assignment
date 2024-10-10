import '../styles/RatanTataSection.css'
import RatanTataAvatar from '../assets/tata-img.png'

export default function RatanTataSection() {
    return (
        <div className='ratan-tata-wrapper'>
            <p>WHAT THEY SAY ABOUT BANKKARO</p>
            <h2>See the <span>Impact</span> in action</h2>
            <img className='tata-avatar' src={RatanTataAvatar} alt=''/>
            
            <div className='tata-inner'>
                <div>
                    <p className='name'>Ratan Tata</p>
                    <p className='desig'>Chairperson Tata Group</p>
                </div>
                <p className='tata-detail'>“BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options. “</p>
            </div>
            <video autoPlay muted loop className="tata-video">
                <source src="ratan_tata_spinner.mp4" type="video/mp4" />
            </video>
            
        </div>
    )
}