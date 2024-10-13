import '../styles/Navbar.css'
import avatar from '../assets/signin-avatar.png'
import chevron from '../assets/chevron.png'
export default function Navbar(){
    return(
        <>
        <nav>
        <div className='nav-inner'>
            <h1><span>BANK</span>KARO</h1>
            <ul>
                <li>OUR PRODUCTS <span><img src={chevron} alt=''/></span></li>
                <li>TOOLS <span><img src={chevron} alt=''/></span></li>
                <li>BLOGS</li>
                <li>ABOUT US</li>
            </ul>
            <div className='sign-in-wrapper'>
                <button>Sign In</button>
                <img src={avatar} alt=''/>
            </div>
        </div>
        
        </nav>
        <div className='nav-border'></div>
        </>
    )
}