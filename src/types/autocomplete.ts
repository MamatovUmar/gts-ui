export interface IAirline {
  name: string
  code: string
  iata_code: string
  ikao_code: string
  is_lowcost: boolean
  logo: string
}

export interface ICountry {
  country_rus: string
  country_eng: string
  code: string
  phone_code: number
  phone_mask: string
  emoji: string
  unicode: string
  image: string
}

export interface ICurrency {
  base: string
  ru: string
  bool: boolean
  disabled: boolean
}
export interface IDocument {
  rule: string
  iso_code: string
  type: string
  country: string[]
  title: string
}

export interface ICity {
  name: string
  state_name: string
  country_name: string
}
export interface IPhoneNumber {
  phone_code: string
  phone_number: string
}
