import { useState, useEffect } from 'react'

import { Question } from '../types/question'

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('http://localhost:3000/question/questions')
      const data = await response.json()
      setQuestions(data)
    }
    fetchQuestions()
  }, [])

  return {
    isLoading: questions.length === 0,
    questions
  }
}