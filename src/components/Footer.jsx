import '../styles/Footer.css'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import appStore from '../assets/app_store.png'
import playStore from '../assets/google_play.png'
export default function Footer(){

    return(
        <footer>
            <div className="footer-left">
                <div className='logos'>
                    <img src={twitter} alt=''/>
                    <img src={instagram} alt=''/>
                </div>
                <p className='footer-about-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. </p>
                <div className='footer-btns'>
                    <button className='figma-button'><img src={appStore} alt=''/>APP STORE</button>
                    <button className='figma-button'><img src={playStore} alt=''/>GOOGLE PLAY</button>
                </div>
                <hr/>
                <p className='footer-about-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            </div>
            <div className="footer-right">
                <div className='footer-submenu'>
                    <p>COMPANY</p>
                    <ul>
                        <li>About BankKaro</li>
                        <li>Vision and Mission</li>
                        <li>Our Team Members</li>
                        <li>Partners and investers</li>
                    </ul>
                </div>
                <div className='footer-submenu'>
                    <p>BLOG</p>
                    <ul>
                        <li>BankKaro Savings</li>
                        <li>Cashless Makes Perfect</li>
                        <li>BankKaro No Interest</li>
                        <li>BankKaro Digital Wallet</li>
                    </ul>
                </div>
                <div className='footer-submenu'>
                    <p>FEATURES</p>
                    <ul>
                        <li>Card Genius</li>
                        <li>Lounge Finder</li>
                        <li>Beat My Card</li>
                        <li>Compare Cards</li>
                    </ul>
                </div>
                <div className='footer-submenu'>
                    <p>CONTACT</p>
                    <ul>
                        <li>Contact Us</li>
                        <li>Contact Support</li>
                        
                    </ul>
                </div>
                <div className='footer-submenu'>
                    <p>LEGAL</p>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        
                    </ul>
                </div>
                <div className='footer-submenu'>
                    <div className='copyright'>
                        <p>© 2024 Bankaro</p>
                        <p>Powered by Pouring Pounds</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}




