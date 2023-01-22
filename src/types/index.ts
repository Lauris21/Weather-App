import { ChangeEvent } from 'react'

export interface OptionType {
  name: string
  lat: number
  lon: number
}

export interface Props {
  locat: string
  options: []
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleClickSearch: () => void
  handleClickOption: (option: OptionType) => void
}
