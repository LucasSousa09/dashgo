import { useQuery } from "react-query"
import { api } from "../api"

interface User {
    name: string,
    email: string,
    createdAt: string,
    id: string
}

interface Data {
    users: User[] 
}

export async function getUsers(): Promise<User[]> {
    const { data } = await api.get<Data>('users')

    const users = data.users.map((user) => {
      return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
          })
      }
    })

    return users
  }

export function useUsers(){
    return useQuery('users-list', getUsers , {  staleTime: 1000 * 5 })
}
