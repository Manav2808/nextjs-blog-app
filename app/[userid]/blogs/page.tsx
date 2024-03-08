import BlogItem from '@/components/blogItem/BlogItem'
import React from 'react'

const UserBlogs = () => {
  return (
    <div>
      <h1>Your Blogs</h1>
      <div>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  )
}

export default UserBlogs