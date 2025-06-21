import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUser = async (userId) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return data;
};

export const useUser = (userId) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
};