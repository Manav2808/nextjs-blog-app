'use client';

import Link from 'next/link'
import React from 'react'

const BlogItem = () => {
  return (
    <div>
        <Link href={`/user/asdf/blog/asdf`}>Blog</Link>
        <Link href={`/user/asdf/edit`}>Edit</Link>
        <button>Delete</button>
    </div>
  )
}

export default BlogItem