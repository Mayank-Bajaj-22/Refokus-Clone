import React from 'react'

function Marquee( {imagesurls} ) {
  return (
    <div className='flex gap-20 py-5 whitespace-nowrap w-full overflow-hidden'>
        {imagesurls.map(elem => <img src={elem} />)}
    </div>
  )
}

export default Marquee