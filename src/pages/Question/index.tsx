import { FC } from 'react'
import { useParams } from 'react-router-dom'

const QuestionPage: FC = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>P</div>
  )
}

export default QuestionPage