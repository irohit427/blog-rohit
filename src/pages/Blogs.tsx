import React, { useEffect, useState } from 'react'
import { client } from '../lib/client';
import Card from '../components/Card';

const Blogs = () => {
  const [stories, setStories] = useState<any>([]);

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
    }`).then((data) => 
      setStories(data)
    ).catch(console.error);
  }, []);

  return (
    <div>
      <section className='grid sm:grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-20 mb-20'>
        {
          stories.map((story: any) => (
            <Card story={story} key={story.slug.current} />
          ))
        }
      </section>
    </div>
  )
}

export default Blogs