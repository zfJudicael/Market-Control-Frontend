import type { IApiMarketRespose } from "~/types/api.response"

export const getMarket = ()=>{
    return useAPI<IApiMarketRespose>('/market')
}