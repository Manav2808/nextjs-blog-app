import Link from 'next/link'
import React from 'react'

const BlogCard: React.ElementType = ({title, author, createdAt}) => {
  return (
    <Link href={`/${author}/blog/${title}`}>
        <div>{title}</div>
        <div>{author}</div>
        <div>{createdAt}</div>
    </Link>
  )
}

export default BlogCard