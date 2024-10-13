import '../styles/RatanTataSection.css'
import '../App.css'
import RatanTataAvatar from '../assets/tata-img.png'

export default function RatanTataSection() {
    return (
        <div className='tata-wrapper' >
            <video className='tata-video' autoPlay loop muted playsInline>
                <source src="ratan_tata_spinner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='tata-overlay' >
                <p className='t-line1'>WHAT THEY SAY ABOUT BANKKARO</p>
                <p className='t-line2'>See the <span>Impact</span> in action </p>
                <div className='tata-wrapper-wrapper'>
                    <div className='tata-about-wrapper'>
                        <div className='tata-left'>
                            <p className='tata-heading'>Ratan Tata</p>
                            <p className='tata-desig'>Chairperson Tata Group</p>
                        </div>
                        <p className='tata-right'>“ BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options. “</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
