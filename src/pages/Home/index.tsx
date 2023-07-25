import { FC } from 'react'

import { useQuestions } from '@@/question/hooks/useQuestions'
import QuestionCard from '@@/question/QuestionCard'
import { Question } from '@@/question/types/question'

const HomePage: FC = () => {
  const { questions, isLoading } = useQuestions()

  if (isLoading) {
    return (
      <div className=" h-60 text-center flex justify-center items-center">
        <span className="loading loading-spinner loading-md" />
      </div>
    )
  }

  console.log(questions)

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {
      questions.map((question: Question) => (
      <QuestionCard key={question.id} question={question} />
      ))
    }
    </div>
  )
}

export default HomePage