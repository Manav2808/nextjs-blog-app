'use client';

import React, { useState } from 'react'

interface FormProps {
    formType: 'login' | 'register' | 'createBlog' | 'editBlog';
}

const Form: React.FC<FormProps> = ({formType}) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const author = "Manav";

  let action = "/api/createblog";

  async function handleBlog(e: React.FormEvent) {
    e.preventDefault();

    if (formType === "editBlog") { action = '/api/editblog' }

    await fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: blogTitle,
        description: blogDescription,
        author: author
      })
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("There was some error");
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  if (formType === "createBlog" || formType === "editBlog") {
    return (
      <div>
        <h1>{formType === "createBlog" ? "Create" : "Edit" } your Blog</h1>
        <form onSubmit={(event) => handleBlog(event)}>
          <label>Title
            <input type='text' onChange={(e) => {setBlogTitle(e.target.value)}} />
          </label>
          <label>Blog Content
            <textarea onChange={(e) => {setBlogDescription(e.target.value)}} />
          </label>
          <button type="submit">{formType === "createBlog" ? "Create" : "Update" }</button>
        </form>
      </div>
    );
  }
  else {
    return (
      <div>
    <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>
    <form>
      <label>Username:
        <input type="text" />
      </label>
      <br />
      <label>Password:
        <input type="password" />
      </label>
      <br />
      <button>{formType === 'login' ? 'Login' : 'Register'}</button>
    </form>
  </div>
  )}
}

export default Form;