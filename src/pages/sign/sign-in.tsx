import CustomInput from '@/components/forms/custom-input'
import Spinner from '@/components/spinner/Spinner'
import { getToken, setToken } from '@/helpers/storage'
import api from '@/utilities/api'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type FormData = {
  email: string
  password: string
}
const SignIn = () => {
  const user = getToken('user')
  useEffect(() => {
    if (user !== null) {
      navigate('/dashboard')
    }
  }, [user])
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, touchedFields, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (values: FormData) => {
    try {

      const { data, status, message } = await api.post('/auth/login', values);
      if (status) {
        console.log(data, 'data')
        setToken('user', data.access_token)
        toast.success('Login success')
        navigate('/dashboard')
      } else {
        toast.error(message)
      }

    }
    catch (err) {
      console.log(err, 'error')
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
          <div className='flex justify-between'>
            <p className='text-gray-700 font-medium'>Remember for 30 days ?</p>
            <Link to={'/'} className='text-primary-purple-text duration-500 font-bold'>Forget Password</Link>

          </div>
          <div className='flex flex-col gap-4'>
            <button type='submit'
              className='border bg-primary-btn-bg py-2 px-4 rounded-md text-white text-center'>
              {
                isSubmitting ?
                  <Spinner fill='white' className='animate-spin text-center w-6 inline-block' /> : 'Sign in'
              }
            </button>
            <button type='submit' className='border-2 text-gray-700 bg-white font-semibold py-2 px-4 rounded-md '>Sign in with Google</button>
          </div>

          <p className='text-center text-gray-600 text-sm'>Don't have an account ? <Link to='/sign-up' className='text-primary-purple-text duration-500 font-bold'>Sign up</Link></p>
        </form>
      </div>
      {/* hero image */}
      <div className=' w-3/5 h-[100vh]'>
        <div className={` bg-hero-sign  bg-center  w-full h-full bg-no-repeat bg-cover rounded-l-[90px]`}>

        </div>
      </div>

    </div>
  )
}

export default SignIn