import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { baseUrl, Urls } from '@constants/urls'

export interface Profile {
  name: string
  email: string
  title: string
  city: string
  address: string
  avatar: string
}

export class Api {
  private static instance: Api
  private axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
  })
  public static get sharedInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api()
    }
    return Api.instance
  }

  public getProfiles() {
    return this.axiosInstance.get<undefined, AxiosResponse<Profile[]>>(Urls.getProfiles)
  }
}
