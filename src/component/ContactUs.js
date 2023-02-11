// import React from 'react';
import move2 from '../move2.png';
import Button from 'react-bootstrap/Button';

export default function ContactUs(){
    return(
        <>
        <h2><u>Contact Us</u></h2>
        <br></br>
            <div><b>Sunny Y&Y Moving Company</b></div>
            <br></br>
                <p>Tel: 718-666-7040</p>
                <p>Tel2: 917-498-8216</p>
                <p>Email: sunnymoving@hotmail.com</p>
                <p><a href= "www.sunnymovingny.com">www.sunnymoving.com</a></p>
            <a href="mailto:sunnymoving@hotmail.com"><Button variant="primary">Contact Us</Button></a>
            <br></br>
                <img src={move2} alt = "Sigh" />
            
        </>
        
    )
}