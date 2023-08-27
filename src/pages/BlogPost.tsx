import React, { useEffect, useState } from 'react'
import { client } from '../lib/client';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format'
import { PortableText } from '@portabletext/react';
import Error from './Error'

const BlogPost = () => {
  const [blogPost, setBlogPost] = useState<any>(null);
  const [isError, setIsError] = useState(false);
  const { slug } = useParams();

  useEffect(() =>{
    client.fetch( `*[slug.current == "${slug}"] {
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
      if (data.length === 0) {
        setIsError(true);
      }
      setBlogPost(data[0])
    })
      .catch(console.error);

  }, [slug])
  
  return (
    <>
    {blogPost && <section className='max-w-3xl mx-auto flex flex-col w-[80%] justify-center gap-8'>
      <div className='flex flex-col gap-4 justify-start'>
        <p className='text-4xl font-bold'>
          {blogPost.title}
        </p>
        <span className='text-xs'>
          {format(new Date(blogPost.publishedAt), 'dd MMMM yyyy')}
        </span>
      </div>
      <div>
        <img src={blogPost.mainImage.asset.url} alt={slug} className='h-2/3 w-full object-cover'/>
      </div>
      <div>
        <PortableText value={blogPost.body} />
      </div>
    </section>}
    {isError && <Error />}</>
  )
}

export default BlogPost