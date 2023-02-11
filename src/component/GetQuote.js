import Button from 'react-bootstrap/Button';

export default function GetQuote(){
    return(
        <>
        <h2><u>Get Quote</u></h2>
            <div>Price</div>
                <p>
                Please call at 718-666-7040 / 917-498-8216 or email us at sunnymoving@nyu.edu with your list list of furniture along with address you moving from and to for an estimate rate. It is encourage to include pictures but not required.
                </p>
            <form>
                <lable htmlFor = "name">Name: </lable>
                    <input 
                        type = "text"
                        name = "name"
                        id = "name"
                    />
                <label htmlFor = "email">Email: </label>
                    <input 
                        type = "text"
                        name = "email"
                        id = "email"
                    />
                <label htmlFor = "loc1">Location 1: </label>
                    <input 
                            type = "text"
                            name = "loc1"
                            id = "loc1"
                        />
                <label htmlFor = "loc2">Location 2: </label>
                    <input 
                            type = "text"
                            name = "loc1"
                            id = "loc2"
                        />
                <label htmlFor = "items">Items: </label>
                    <input 
                            type = "text"
                            name = "items"
                            id = "items"
                        />
                    <br></br>
                {/* <input type="submit" /> */}
                <div className="mb-2">
                    <Button variant="primary" size="sm">Submit</Button>
                </div>
                
            </form>
        </>
        
    )
}