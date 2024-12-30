export interface IItem {
  label: string
  value: string
  icon?: string
  disabled?: boolean
  items?: string[]
}

export type DatepickerModelType = ((Date | Date[] | (Date | null)[]) & (string | Date | Date[] | string[])) | null | undefined
