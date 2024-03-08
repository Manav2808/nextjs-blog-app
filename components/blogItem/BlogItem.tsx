'use client';

import Link from 'next/link'
import React from 'react'

const BlogItem = () => {
  return (
    <div>
        <Link href={`/asdf/blog/asdfs`}>Blog</Link>
        <Link href={`/asdf/edit`}>Edit</Link>
        <button>Delete</button>
    </div>
  )
}

export default BlogItem