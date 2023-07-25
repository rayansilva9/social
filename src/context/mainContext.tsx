import React, { createContext, ReactNode, useEffect, useState } from 'react'


type ContextProviderProps = {
  children: ReactNode
}

type ContextProps = {
  open: boolean
  setDistance: React.Dispatch<React.SetStateAction<number>>
  distance: number
  setPostOnViewMode: React.Dispatch<React.SetStateAction<boolean>>
  postOnViewMode: boolean
}


export const MainContext = createContext({} as ContextProps)

export const MainContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [postOnViewMode, setPostOnViewMode] = useState<boolean>(false)
  const [distance, setDistance] = useState<number>(0)



  return <MainContext.Provider value={{ open, distance, setDistance, postOnViewMode, setPostOnViewMode }}>{children}</MainContext.Provider>
}
