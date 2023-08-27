import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-coral-red rounded-xl flex flex-row py-10 px-10 w-3/4 gap-10 items-center mx-auto mt-10'>
      <div className='flex flex-col gap-6'>
        <p className='text-4xl font-bold'>Dont miss any recent blogs and updates.</p>
        <p className='text-xl'>Sign up for our newsletter.</p>
      </div>
      <div className='flex flex-col gap-4'>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 w-72 flex-auto rounded-md border border-gray-100
           bg-white/5 px-3.5 py-2 dark:text-white shadow-sm
            sm:text-sm sm:leading-6 placeholder:text-white
            ring-0 ring-inset ring-red-400 focus:ring-0 focus:ring-offset-0 focus:outline-none
            "
          placeholder="Enter your email"
        />
        <button className='rounded-lg border border-white w-40 py-2 bg-white 
          text-coral-red opacity-90 hover:opacity-100'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter