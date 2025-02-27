export interface IProperty {
  id: number
  name: string
  slug: string
  price: number
  status_id: number
  owner_id: number
  address: IAddress
  created_at: string
}

export interface IAddress {
  city: ICity
}

export interface ICity {
  name: string
  country: ICountry
}

export interface ICountry {
  name: string
}

export type APIState = 'INITIAL' | 'LOADING' | 'LOADED' | 'ERROR'
