import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { client } from '../lib/client'
import { Link } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [stories, setStories] = useState<any>([]);
  const [otherStories, setOtherStories] = useState<any>([]);

  useEffect(() => {
    client.fetch( `*[_type == "post"] {
      title,
      slug,
      body,
      description,
      publishedAt,
      author -> {
        name,
        image
      },
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }[0..5]`).then((data) => { 
      setStories(data)
      //setOtherStories(data.slice(1, data.length));
    }).catch(console.error);
  }, []);

  return (
    <div className='flex flex-col gap-10'>
      <section className='max-w-7xl mx-auto px-5 w-full'>
        <HeroCard story={stories[0]}/>
      </section>
      <section className='grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-20 my-16'>
       {
          stories.map((story: any) => (
            <Card story={story} key={story.slug.current}/>
          ))
        }
      </section>
      <Link to='/blogs'>
        <div className='max-w-7xl w-full mx-auto flex items-end justify-end pr-20'>
          <button className='bg-white py-2 px-8 
            rounded text-slate-800 tracking-wide hover:scale-105 
            hover:opacity-80 transition-all duration-200 shadow-lg shadow-slate-500/50'>
            Read All Blogs
          </button>
        </div>
      </Link>
      <section>
        <Newsletter />
      </section>
    </div>
  )
}

export default Home