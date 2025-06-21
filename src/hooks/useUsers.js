import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=3');
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 4, // 預設為 0 毫秒
    cacheTime: 1000 * 60 * 5 // 預設為 5 分鐘（300,000 毫秒）
  });
};
