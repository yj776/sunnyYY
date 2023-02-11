// import React from 'react';
// import move2 from '../move2.jng';
import Button from 'react-bootstrap/Button';

export default function ContactUs(){
    return(
        <>
        <h2><u>Contact Us</u></h2>
            <div><b>Sunny Moving Company</b></div>
                <p>Tel: 718-666-7040</p>
                <p>Tel2: 917-498-8216</p>
                <p>Email: sunnymoving@hotmail.com</p>
                <p><a href= "www.sunnymovingny.com">www.sunnymoving.com</a></p>

                {/* <img src={move2} alt = "Sigh" /> */}
            <Button variant="primary">Contact Us</Button>
        </>
        
    )
}