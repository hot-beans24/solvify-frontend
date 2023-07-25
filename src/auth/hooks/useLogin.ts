import { useState } from 'react'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // eslint-disable-next-line consistent-return
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(() => true)
      setError(() => '')

      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }

      setError(() => '')
      return data
    } catch (err) {
      console.error(err)
      setError(() => err as any)
    } finally {
      setIsLoading(() => false)
    }
  }

  return {
    login,
    isLoading,
    error
  }
}