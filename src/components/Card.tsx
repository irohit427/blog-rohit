import format from 'date-fns/format'
import { Link } from 'react-router-dom'
import { urlFor } from '../lib/client';

const Card = ({story}: {
  story: any
}) => {
  console.log(story);
  console.log(urlFor(story.author.image.asset._ref));
  
  return (
    story && 
    <Link to={`/blog/${story.slug.current}`}>
      <div>
        <article className='border border-slate-300 rounded-md shadow-lg shadow-slate-500/50 overflow-hidden 
          hover:scale-[103%] transition-all duration-500 ease-in-out'>
          <img 
            src={story.mainImage.asset.url} 
            alt='' className='h-50 w-full' />
          <div className='p-4'>
            <h2 className='text-xl font-bold mb-2'>{story.title}</h2>
            <p className='text-sm leading-relaxed line-clamp-3'>{story.description}</p>
          </div>
          <div className='p-4 flex flex-row justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img 
                src={urlFor(story.author.image.asset._ref).width(200).height(220).url()}
                className='w-10 h-10 bg-slate-500 rounded-full' 
                alt={story.author.name}/>
              <p className='text-sm'>{story.author.name}</p>
            </div>
            <div>
              <p className='text-xs'>{format(new Date(story.publishedAt), 'dd/MM/yyyy')}</p>
            </div>
          </div>
        </article>
      </div>
    </Link>
  )
}

export default Card