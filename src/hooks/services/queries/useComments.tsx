import { getComments } from '@/apis/comments'
import queryKeys from '@/constants/services/queryKeys'
import { useQuery } from '@tanstack/react-query'

const useComments = () => {
  return useQuery({
    queryKey: [queryKeys.comments],
    queryFn: getComments,
  })
}

export default useComments
