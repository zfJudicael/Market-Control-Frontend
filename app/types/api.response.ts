import type { IMarket } from "./market"

export interface IApiResponse{
    message?: string
    value: any,
}

export interface IApiMarketRespose extends IApiResponse{
    value: IMarket[]
}