import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import BlogPost from './BlogPost'
import Error from './Error'

const Wrapper = () => {
  return (
    <div className='w-full max-w-7xl mx-auto h-[90%] my-16'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default Wrapper