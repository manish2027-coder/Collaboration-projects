import React from 'react'
import logo from '../assets/logo.png'
function Header() {
  return (
    <div className='bg-black text-white p-4 px-[64px] flex justify-between'>
      <div className='flex items-center gap-3'>
        <img draggable="false" src={logo} className="w-25 border-r-2 pr-3" alt="logo" />
        <h1 className='text-2xl'>Help Center</h1>
      </div>
      <div className='flex gap-6 leading-[9px]'>
        <button className='text-[24px]  border bg-[#191a1b] px-[1rem] py-[22px] rounded-[8px]'>Submit a request</button>
        <button className='text-[24px]   bg-[#4C5FD5] px-[1.5rem] py-[22px] rounded-[8px] hover:bg-[#fff] hover:text-black'>Sign in</button>
      </div>
    </div>
  )
}

export default Header
