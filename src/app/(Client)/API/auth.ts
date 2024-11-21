import { IUser } from "@/app/(Client)/types/user";
import { authInstance, request } from "@/app/(Client)/utils/instance/instance"

export const register = async (data: IUser) => {
  const res = await request(authInstance,{
    url: '/api/users/register',
    method: 'POST',
    data,
  })
  return res.data;
}

export const login = async (data: IUser) => {
  const res = await request(authInstance,{
    url: '/api/users/login',
    method: 'POST',
    data,
  })
  return res.data;
}