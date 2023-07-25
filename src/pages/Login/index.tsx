import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, RegisterOptions } from 'react-hook-form'

import { useLogin } from '@@/auth/hooks/useLogin'

const LoginPage: FC = () => {
  const navigate = useNavigate()
  const { login, isLoading, error } = useLogin()

  type FormValues = {
    email: string
    password: string
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const handleOnSubmit = async (data: FormValues) => {
    const loginData = await login(data.email, data.password)
    if (!error) {
      console.log(loginData)
      navigate('/')
    }
  }

  const emailOptions: RegisterOptions<FormValues, 'email'> = {
    required: '入力してください',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'メールアドレスの形式で入力してください',
    }
  }

  const passwordOptions: RegisterOptions<FormValues, 'password'> = {
    required: '入力してください'
  }

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="w-fit mx-auto p-8 border rounded-md"
    >
      <h2 className="text-2xl font-semibold text-center">Log in</h2>
      <div className="flex flex-col">
        {error && <span className="text-sm text-red-500">{error}</span>}
        <div>
          <label htmlFor="email" className="label flex flex-col items-start gap-1">
            <span className="labe]-text">Email</span>
            <input
              id="email" type="text" placeholder="email" className={`input input-bordered w-[300px] ${errors.email && 'input-error'}`}
              {...register('email', emailOptions)}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </label>
        </div>
        <div>
          <label htmlFor="password" className="label flex flex-col items-start gap-1">
            <span className="labe]-text">Password</span>
            <input
              id="password" type="text" placeholder="password" className={`input input-bordered w-[300px] ${errors.password && 'input-error'}`}
              {...register('password', passwordOptions)}
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </label>

        </div>
        <button type="submit" className="btn mt-6">
          {isLoading ? <span className="loading loading-spinner" /> : 'Log in'}
        </button>
      </div>
    </form>
  )
}

export default LoginPage