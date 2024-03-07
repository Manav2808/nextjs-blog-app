import Form from '@/components/form/Form'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <Form formType='login' />
      <div>
        Not Logged In? <Link href="/register">Register</Link>
      </div>
    </div>
  )
}

export default LoginPage