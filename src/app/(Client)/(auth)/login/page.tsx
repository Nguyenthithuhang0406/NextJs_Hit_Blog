"use client";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useRouter } from 'next/navigation';

import { IUser } from '@/app/(Client)/types/user';
import { login } from '@/app/(Client)/API/auth';
import { loginValidation} from '@/app/(Client)/utils/validation/authValidation';

import './login.scss';

const Login = () => {
  const router = useRouter();
  const handleClickNavigationRegister = () => {
    router.push('/register');
  }

  const initialValues: IUser = {
    email: '',
    password: '',
  }

  const handleLogin = async (values: IUser) => {
    try {
      const res = await login(values);
      console.log('loginData', res);
      router.push('/');
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <>
      <div className='login-container'>
        <div className='login-body'>
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={ handleLogin}
        >
          <Form>
            <p className='login-title'>Login</p>

            <div className='login-group-field'>
              <label htmlFor='email' className='login-label'>Email</label>
              <Field name='email' type='email' className='login-field' placeholder="Enter email" />
              <ErrorMessage name='email' component='div' className='login-error' />
            </div>

            <div className='login-group-field'>
              <label htmlFor='password' className='login-label'>Password</label>
              <Field name='password' type='password' className='login-field' placeholder="Enter password"/>
              <ErrorMessage name='password' component='div' className='login-error' />
            </div>

            <p className='login-forgot'>Forgot password ?</p>

            <button type='submit' className='login-button' >Sign In</button>

            <p className='login-signin'>Do not have an account? <span className='login-signin-link' onClick={handleClickNavigationRegister}>Register now</span></p>
          </Form>
          </Formik>
          </div>
      </div>
    </>
  )
}

export default Login;