import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#020617] border-t border-purple-500/20 px-5 lg:px-28 py-4 lg:py-6 flex items-center justify-between mt-16 shadow-[0_-5px_30px_rgba(139,92,246,0.08)]'>
      <img className='invert h-5 lg:h-9' src="/assets/logo.svg" alt="" />
      <div className='text-white/70 lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>© 2026 Personal Portfolio</p>

        Made by
        <p><span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]'>Arifah</span></p>
      </div>
    </div>
  )
}