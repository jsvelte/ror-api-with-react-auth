import React from 'react'
import { NextPage } from 'next'
import toast from 'react-hot-toast'
import { MdEmail } from 'react-icons/md'
import { PulseLoader } from 'react-spinners'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import useStore from '~/store'
import Card from '~/components/atoms/Card'
import Label from '~/components/atoms/Label'
import { signUpUserFn } from './api/authApi'
import { RegisterInput } from '~/utils/types'
import Button from '~/components/atoms/Button'
import { SignUpSchema } from '~/utils/validation'
import Layout from '~/components/templates/Layout'
import { SignUpFormValues } from '~/utils/formValues'
import FormInput from '~/components/molecules/FormInput'

const SignUp: NextPage = (): JSX.Element => {
  const store = useStore()

  const {
    mutate: registerUser,
    data,
    isSuccess
  } = useMutation((userData: RegisterInput) => signUpUserFn(userData), {
    onMutate(variables) {
      store.setRequestLoading(true)
    },
    onSuccess(data) {
      store.setRequestLoading(false)
      toast.success(data?.message)
    },
    onError(error: any) {
      store.setRequestLoading(false)
      if (Array.isArray((error as any).response.data.error)) {
        ;(error as any).response.data.error.forEach((el: any) => toast.error(el.message))
      } else {
        toast.error((error as any).response.data.message)
      }
    }
  })

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormValues>({
    mode: 'onChange',
    resolver: yupResolver(SignUpSchema)
  })

  const handleSignUp: SubmitHandler<SignUpFormValues> = async (data): Promise<void> => {
    return await new Promise((resolve) => {
      registerUser({ user: data })
      resolve()
      handleReset()
    })
  }

  const handleReset = (): void =>
    reset({
      email: '',
      password: '',
      password_confirmation: ''
    })

  return (
    <Layout metaTitle="Sign Up">
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <Card className="mx-auto w-full max-w-lg space-y-3 p-8">
          <header>
            <h1 className="text-center text-3xl font-semibold">Registration</h1>
          </header>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
            <section>
              <Label className="mb-2">Your Email</Label>
              <FormInput
                type="text"
                Icon={MdEmail}
                register={register('email')}
                placeholder="name@gmail.com"
                isError={errors?.email}
                disabled={isSubmitting || isSuccess}
              />
              {errors?.email && <span className="error">{errors.email?.message}</span>}
            </section>
            <section>
              <Label className="mb-2">Password</Label>
              <FormInput
                type="password"
                Icon={RiLockPasswordFill}
                register={register('password')}
                placeholder="••••••••••"
                isError={errors?.password}
                disabled={isSubmitting || isSuccess}
              />
              {errors?.password && <span className="error">{errors.password?.message}</span>}
            </section>
            <section>
              <Label className="mb-2">Confirm Password</Label>
              <FormInput
                type="password"
                register={register('password_confirmation')}
                Icon={RiLockPasswordFill}
                placeholder="••••••••••"
                isError={errors?.password_confirmation}
                disabled={isSubmitting || isSuccess}
              />
              {errors?.password_confirmation && (
                <span className="error">{errors.password_confirmation?.message}</span>
              )}
            </section>
            <footer>
              <Button
                type="submit"
                variant="blue"
                className="w-full"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting || isSuccess ? (
                  <div className="flex items-center justify-center py-0.5">
                    <PulseLoader color="#ffffff" size={10} />
                  </div>
                ) : (
                  <span>Sign Up</span>
                )}
              </Button>
            </footer>
          </form>
        </Card>
      </main>
    </Layout>
  )
}

export default SignUp
