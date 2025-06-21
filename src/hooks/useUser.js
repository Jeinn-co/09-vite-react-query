import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUser = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return data;
};

export const useUser = ({ userId = null } = {}) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 1000 * 2,
    cacheTime: 1000 * 60 * 5,
    enabled: !!userId // 只有當 userId 存在時才會觸發
  });
};