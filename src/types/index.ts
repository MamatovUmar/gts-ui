export type LocaleTypes = 'en' | 'ru' | 'uz'

export type ServicesTypes = 'flights' | 'hotels' | 'railway' | 'transfers' | 'tours' | 'insurance' | 'excursions' | 'esim'

export interface IService {
  label: Record<LocaleTypes, string>
  icon: string
  value: ServicesTypes
  disabled?: boolean
}
