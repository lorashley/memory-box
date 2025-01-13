import { useCallback, useState } from 'react'

export type TurnOn = () => void
export type TurnOff = () => void
export type Toggle = () => void
export type Set = (value: boolean) => void

const useSwitch = (
  initialState = false,
): [boolean, TurnOn, TurnOff, Toggle, Set] => {
  const [state, setState] = useState<boolean>(initialState)

  const turnOn = useCallback(() => {
    setState(true)
  }, [setState])

  const turnOff = useCallback(() => {
    setState(false)
  }, [setState])

  const toggle = useCallback(() => {
    setState((prevState) => !prevState)
  }, [setState])

  const set = (value: boolean) => {
    setState(value)
  }

  return [state, turnOn, turnOff, toggle, set]
}

export default useSwitch
