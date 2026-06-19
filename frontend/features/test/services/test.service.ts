import { api } from '@/lib/api';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>('/posts');

  return response.data;
}
