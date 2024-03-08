'use client';

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/">Logo</Link>
        <div>
            <Link href={`/asdf/create`}>Create a Blog</Link>
            <Link href="/asdf/blogs">My Blogs</Link>
            <Link href="/login">Login</Link>
        </div>
    </div>
  )
}

export default Navbar