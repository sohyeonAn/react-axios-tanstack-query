import { User } from './user'

export interface Comment {
  id: number
  body: string
  postId: number
  likes: number
  user: User
}

export interface CommentsResponse {
  comments: Comment[]
  total: number
  skip: number
  limit: number
}
