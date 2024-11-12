import React from 'react'

function CreateTicket() {
  return (
    <div className='snap-always snap-center'>
      <div className=' flex justify-center flex-col items-center' style={{marginTop:'6%'}}>
            <p className=' text-5xl  font-bold text-center text-gray-800' style={{marginBottom:'1.5%'}}>Create a Ticket</p>
            <hr className=' bg-gray-400 h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
            
          </div>
      <div className=' text-gray-600 flex flex-row justify-around relative' style={{marginLeft: '15%', marginRight: '15%', marginTop:'2%', marginBottom:'4%'}}>
        
       
        <div className=' w-1/2 h-1/2 '>
        <form className='flex flex-col justify-center h-full ' >
          <label htmlFor='subject' style={{marginTop:'5%', marginBottom: '2%'}} > Name </label>
          <input type="text" name="user_name" placeholder=' Jacob ' required  className=' px-3 border-2 border-gray-500 rounded-lg py-1'/>


          <label htmlFor='email' style={{marginTop:'5%', marginBottom: '2%'}} > Email</label>
          <input type="email"name="user_email" placeholder=' jacob@gmail.com' required  className=' px-2 border-2 border-gray-500 rounded-lg py-1'/>


          <label htmlFor='message' style={{marginTop:'5%', marginBottom: '2%'}} > Issue</label>
          <textarea type="text" name="message" placeholder=' type your concern in here ...' required className=' border-2 border-gray-500 rounded-lg h-1/2 px-2'/>
          <div className=' flex flex-row justify-end'>
            <button type="submit" value="Send"  className=' transition ease-in-out duration-75 rounded-full font-medium bg-gray-500 text-gray-200 hover:bg-gray-600 cursor-pointer p-2 my-8 text-lg w-3/12 items-center ' style={{marginLeft: '4.3%'}} >
              Submit
            </button>
          </div>
        </form>
          
        {
        //<div className=' bg-cyan-500 w-lvw  absolute -z-10'style={{left:'-23%', bottom:'-25%', height:'75vh'} }></div>
        }
        </div>
        
      </div>
      
    </div>
  )
}

export default CreateTicket