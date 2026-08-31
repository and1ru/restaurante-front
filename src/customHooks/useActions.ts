import { apiClient } from "./apiClient"

export const post = async <TBody, TResponse>(url: string,body?: TBody): Promise<TResponse> => {
  const response = await apiClient.post<TResponse>(url, body)
  return response.data
}

export const get = async <TResponse>(url: string): Promise<TResponse> => {
  const response = await apiClient.get<TResponse>(url, )
  return response.data
}

export const deleteR = async <TResponse>(url: string): Promise<TResponse> => {
  const response = await apiClient.delete<TResponse>(url)
  return response.data
}

export const put = async <TBody, TResponse>(url: string,body: TBody): Promise<TResponse> => {
  const response = await apiClient.put<TResponse>(url, body)
  return response.data
}

export const patch = async <TBody, TResponse>(url: string,body: TBody): Promise<TResponse> => {
  const response = await apiClient.patch<TResponse>(url, body)
  return response.data
}