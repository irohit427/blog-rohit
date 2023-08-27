import React, { useState } from 'react'

const ThemeToggler = () => {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }
  
  return (
    <div className='border border-gray-900 dark:border-white flex items-center rounded-full gap-1 px-2 h-[22px] 
      relative hover:cursor-pointer'
      onClick={handleToggle}
    >
      <div className='text-xs trasition ease-in-out duration-500'>🌙</div>
      <div className='text-xs trasition ease-in-out duration-500'>🔆</div>
      <div 
        className={`absolute w-4 h-4 bg-yellow-300 rounded-full trasition-all ease-in-out duration-2000 ${theme ==='light' ? 'left-1' : 'right-1'}`}
      />
    </div>
  )
}

export default ThemeToggler