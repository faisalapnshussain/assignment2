import React from 'react'

const Footer = () => {
  return (
    <div className='ml-8 bg-slate-600'>
      <div className='w-72 h-48 bg-zinc-900 float-left m-4 border-8 border-yellow-500 text-color-yellow-500'>
        <ul className='text-white'>
        <li className='font-semibold font-sans mt-2 mx-2'>Associated Companies</li>
        <li className='font-extralight font-sans mx-4 py-2'>Allied Rental Modarba</li>
        <li className='font-extralight font-sans mx-4 py-2'>Allied Machinery Ltd.</li>
        <li className='font-extralight font-sans mx-4 py-2'>eCommerce Solution</li>
        </ul>
        </div>
      <div className='w-72 h-48 bg-zinc-900 float-left m-4 border-8 border-yellow-500'>
      <ul className='text-white'>
        <li className='font-semibold font-sans mt-2 mx-2'>Our Services</li>
        <li className='font-extralight font-sans mx-4 py-2'>Training</li>
        <li className='font-extralight font-sans mx-4 py-2'>Support</li>
        <li className='font-extralight font-sans mx-4 py-2'>Agreement</li>
        </ul>
        </div>
      <div className='w-72 h-48 bg-zinc-900 float-left m-4 border-8 border-yellow-500'>
        <p className='text-white mt-2 mx-2'>Office in Karachi</p>
        <p className='text-white mt-2 mx-4 font-extralight font-sans'>21/3, Sector No. 22, Korangi Industrial Area, Karachi-74900 G.P.O.Box 940
        <br/>Ph:021-3504248
        </p>
      </div>
      <div className='w-72 h-48 bg-zinc-900 float-left m-4 border-8 border-yellow-500 text-white'>Map</div>
    </div>
  )
}

export default Footer;