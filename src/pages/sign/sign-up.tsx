import CustomInput from '@/components/forms/custom-input';
import Spinner from '@/components/spinner/Spinner';
import api from '@/utilities/api';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
type FormData = {
    name: string
    password: string
    confirmPassword: string
    email: string
}

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, touchedFields, isSubmitting }, reset } = useForm<FormData>({
        mode: 'onChange',

    })

    const onSubmit = async (values: FormData) => {
        const { name, password, confirmPassword, email } = values;
        if (password !== confirmPassword) return;
        try {

            const { data, status, message } = await api.post('/auth/signup', values);
            if (status) {
                navigate('/')
                reset()
            }
            console.log(message, 'result')
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
                        <h2 className='text-3xl font-semibold text-primary-h2'>Sign up</h2>
                        <p className=' text-primary-text'>Start your 30-day free trial.</p>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <div>
                            <CustomInput
                                label='Name*'
                                type='text'
                                placeholder='Enter your name'
                                name='name'
                                required
                                register={register}
                                touched={touchedFields.name}
                                error={errors.name?.message}
                            />
                        </div>
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
                        <div>
                            <CustomInput
                                label='Confirm password'
                                type='password'
                                placeholder='Enter your password'
                                name='confirmPassword'
                                required
                                register={register}
                                touched={touchedFields.confirmPassword}
                                error={errors.confirmPassword?.message}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>

                        <button type='submit' className='border bg-primary-btn-bg py-2 px-4 rounded-md text-white'>
                            {
                                isSubmitting ?
                                    <Spinner fill='white' className='animate-spin text-center w-6 inline-block' /> : 'Get started'
                            }
                        </button>
                        <button type='submit' className='border-2 bg-hwite-bg py-2 px-4 rounded-md text-gray-700'>Sign up with Google</button>
                    </div>

                    <p className='text-center text-gray-600'>Already have an account ? <Link to='/' className='text-primary-btn-bg font-semibold'>Log in</Link> </p>
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

export default SignUp