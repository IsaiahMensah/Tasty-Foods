import'./Reserve.css'

function Reserve() {
    return(
        <div className="reserve">
            <div className="container">
                <h1 className='r-text'>RESERVATIONS</h1>
                  <p className='reserve-text'>
                      make your reservation from this portal it simple, secure and fast. Hurry now and book your tables
                  </p>
                <form className='r-form'>
                    <input type='date' placeholder='Date' classname='form-reserve'/>
                    <input type='time' placeholder='time' classname='form-reserve'/>
                    <input type='number' placeholder='Number of persons......' classname='form-reserve'/>
                </form>
               
                <br/>
                <div className='btn'>
                   <button className='r-btn'>Book Now</button>
                    
                </div>
            </div>
            
                
            
            
        </div>
    )
}
export default Reserve;