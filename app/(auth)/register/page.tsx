import Form from '@/components/form/Form'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <Form formType='register' />
      <div>
        Already a User? <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default RegisterPage