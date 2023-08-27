import React from 'react'

const HeroCard = ({story}: {
  story: any
}) => {
  return (
    <>
      {story && <article className='relative'>
        <img 
          src={story.mainImage.asset.url} 
          alt='' className='h-96 w-full object-cover rounded-sm'></img>
          <div className='absolute bottom-8 left-8'>
            <h1 className='text-4xl lg:text-5xl mb-6 text-white'>{story.title}</h1>
            <p className='text-slate-200 mb-8 md:w-1/2'>{story.description}</p>
            <button className='bg-white py-2 px-8 rounded shadow text-slate-800 opacity-75 hover:opacity-100 transition-all duration-200 tracking-wide'>Read More</button>
          </div>
      </article>}
    </>
  )
}

export default HeroCard