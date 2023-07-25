import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Question } from '../types/question'
import q from '/q.svg'
import user from '/user.svg'

type Props = {
  question: Question
}

const QuestionCard: FC<Props> = ({ question }) => {
  return (
    <Link to={`/question/${question.id}`} className="card bg-base-100 border">
      <div className="card-body">
        <h2 className="card-title text-[#10999D] flex items-center gap-4">
          <img src={q} alt="q" className="w-6 h-6" />
          {question.title}
        </h2>
        <p>{question.content}</p>
        <div className="mt-4 flex justify-between gap-6">
          <span>{question.createdAt}</span>
          <span className="font-semibold flex items-center gap-2">
            <img src={user} alt="user" className="w-4 h-4" />
            {question.user.username}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default QuestionCard