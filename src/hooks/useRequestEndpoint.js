import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


export const useGetRequestEndpoint = (payload) =>{
    return useQuery({
        queryKey: payload.key,
        queryFn:payload.serviceFn,
        enabled: false,
        retry: false
    })
}


export const useMutationRequestEndpoint = () => {
    return useMutation({
      mutationFn : ({serviceFn, payload})=>serviceFn(payload),
    })
}