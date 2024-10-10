import '../styles/HeroPage.css'
export default function Card({image,heading,details}){
    return(
        <div className='card-outer'>
            <img src={image} alt=''/>
            <p className='card-heading'>{heading}</p>
            <p className='card-details'>{details}</p>
        </div>
    )
}