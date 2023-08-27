import format from 'date-fns/format'
import { Link } from 'react-router-dom'

const Card = ({story}: {
  story: any
}) => {
  return (
    story && 
    <Link to={`/blog/${story.slug.current}`}>
      <div>
        <article className='border border-slate-300 rounded-md shadow-lg shadow-slate-500/50 overflow-hidden 
          hover:scale-[103%] transition-all duration-500 ease-in-out'>
          <img 
            src={story.mainImage.asset.url} 
            alt='' className='' />
          <div className='p-4'>
            <h2 className='text-xl font-bold mb-2'>{story.title}</h2>
            <p className='text-sm leading-relaxed md:text-clip'>{story.description}</p>
          </div>
          <div className='p-4 flex flex-row justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-slate-500 rounded-full'></div>
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