import CustomInput from '@/components/forms/custom-input'
import api from '@/utilities/api'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

type FormData = {
  email: string
  password: string
}

const SignIn = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm<FormData>()

  const onSubmit = async (values: FormData) => {
    try {

      const { data, status, message } = await api.post('/auth/login', values);
      console.log(data, 'data')
      console.log(status, 'status')
      console.log(message, 'message')
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='h-full flex w-full font-inter '>
      <div className='w-2/5 px-20 flex flex-col justify-center'>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-semibold text-primary-h2'>Welcome back</h2>
            <p className=' text-primary-text'>Welcome back! Please enter your details</p>
          </div>
          <div className='flex flex-col gap-4'>

            <div>
              <CustomInput
                label='Email'
                type='email'
                placeholder='Enter your Email'
                name='email'
                required
                register={register}
                touched={touchedFields.email}
                error={errors.email?.message}
              />
            </div>
            <div>
              <CustomInput
                label='Password'
                type='password'
                placeholder='Enter your password'
                name='password'
                required
                register={register}
                touched={touchedFields.password}
                error={errors.password?.message}
              />
            </div>
          </div>
          <div className='flex gap-4'>
            <p>Remember for 30 days</p>
            <Link to={''}>Forget Password</Link>

          </div>
          <div className='flex flex-col gap-4'>

            <button type='submit' className='border bg-primary-btn-bg py-2 px-4 rounded-md text-white'>Sign in</button>
            <button type='submit' className='border bg-primary-btn-bg py-2 px-4 rounded-md text-white'>Sign in with Google</button>
          </div>

          <p>Don't have an account ? <Link to='/sign-up'>Sign up</Link></p>
        </form>
      </div>
      {/* hero image */}
      <div className=' w-3/5 h-[100vh]'>
        <div className={` bg-hero-sign  bg-center  w-full h-full bg-no-repeat bg-cover`}>

        </div>
      </div>

    </div>
  )
}

export default SignIn