import './NavigationBarComponent.css'

const NavigationBarComponent=()=>{
    return(
        <div className='Nav-bar'>
         <div className='card-container'>
            <div className='Logo'>
           
            </div>
            <div className='Header'>
                <h1 className='highlighted'>Pro Food Store</h1>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Cart</li>
                    <li>Checkout</li>
                </ul>
            </div>
         </div>
        </div>
    )
}

export default NavigationBarComponent;