'use client';

import React from 'react'

interface FormProps {
    formType: 'login' | 'register' | 'createBlog' | 'editBlog';
}

const Form: React.FC<FormProps> = ({formType}) => {
  if (formType === "createBlog" || formType === "editBlog") {
    return (
      <div>
        <h1>{formType === "createBlog" ? "Create" : "Edit" } your Blog</h1>
        <form>
          <label>Title
            <input type='text' />
          </label>
          <label>Blog Content
            <input type='text' />
          </label>
          <button>{formType === "createBlog" ? "Create" : "Update" }</button>
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
      <button type="submit">{formType === 'login' ? 'Login' : 'Register'}</button>
    </form>
  </div>
  )}
}

export default Form;