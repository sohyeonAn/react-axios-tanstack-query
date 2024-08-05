import axios from '@/libs/axios'
import { CommentsResponse } from '@/types/comment'

export const getComments = async () => {
  const response = await axios.get<CommentsResponse>('/comments')
  return response.data
}
