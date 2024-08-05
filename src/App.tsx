import './App.css'
import useComments from './hooks/services/queries/useComments'
import { Comment } from './types/comment'

function App() {
  const { data, isPending, isError } = useComments()

  if (isPending) return <></>
  if (isError) return <div>Error occurred...</div>

  return (
    <div>
      <p>COMMENTS</p>
      {data.comments && (
        <ul>
          {data.comments.map((comment: Comment) => (
            <li key={comment.id}>
              <span>{comment.body}</span>
              <span> 👍🏻{comment.likes}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
