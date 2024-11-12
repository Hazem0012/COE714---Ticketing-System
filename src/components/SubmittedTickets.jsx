import React from 'react'

function SubmittedTickets() {
  return (
    <div>
        <div className=' flex justify-center flex-col items-center' style={{marginTop:'6%'}}>
            <p className=' text-5xl  font-bold text-center text-gray-800' style={{marginBottom:'1.5%'}}>Submitted Tickets</p>
            <hr className=' bg-gray-400 h-1 opacity-70 rounded-lg ' style={{width:'4%', marginTop:'0.2%'}} />
        </div>
     </div>
  )
}

export default SubmittedTickets;