import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full mx-auto flex items-center justify-center py-4 border-t border-slate-200 gap-20'>
      <div className='flex flex-row text-2xl gap-4'>
        <AiFillLinkedin className='hover:cursor-pointer hover-color hover:scale-110 transition-all duration-500 opacity-80 hover:opacity-100'/>
        <AiFillGithub className='hover:cursor-pointer hover-color hover:scale-110 transition-all duration-500 opacity-80 hover:opacity-100'/>
      </div>
      <div>© <span className='text-md'>Rohit Raj</span></div>
      <div className='flex flex-row text-2xl gap-4'>
        <AiFillInstagram className='hover:cursor-pointer hover-color hover:scale-110 transition-all duration-500 opacity-80 hover:opacity-100'/>
        <AiFillTwitterSquare className='hover:cursor-pointer hover-color hover:scale-110 transition-all duration-500 opacity-80 hover:opacity-100'/>
      </div>
    </div>
  )
}

export default Footer