import React from 'react'

const HeroCard = () => {
  return (
    <>
      <article className='relative'>
        <img 
          src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' 
          alt='' className='h-96 w-full object-cover rounded-sm'></img>
          <div className='absolute bottom-8 left-8'>
            <h1 className='text-4xl lg:text-5xl mb-6 text-white'>Document Title</h1>
            <p className='text-slate-200 mb-8 md:w-1/2'>Lorem jcbjbf nebfjef jhsfjkbef nbuev evfbe efje ce  fjefebc cejbcec nbdcjec necbjkebc n ceec
              knjkcbekc efcjenjce mcn ejcnej cemnckemv cnemnfjcnej xen cje e cne ce jcenc ejkbjcbewce cnm ebfouqjfbdnmq 
            </p>
            <button className='bg-white py-2 px-8 rounded shadow text-slate-800 opacity-75 hover:opacity-100 transition-all duration-200 tracking-wide'>Read More</button>
          </div>
      </article>
    </>
  )
}

export default HeroCard