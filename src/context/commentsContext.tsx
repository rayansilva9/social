import React, { createContext, ReactNode, useEffect, useState } from 'react'


type userContextProviderProps = {
  children: ReactNode
}

type userContextProps = {
  ShowComments: () => void
  open: boolean
  setDistance: React.Dispatch<React.SetStateAction<number>>
  distance: number
}


export const CommentsContext = createContext({} as userContextProps)

export const CommentsContextProvider: React.FC<userContextProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [distance, setDistance] = useState<number>(0)

  const ShowComments = () => {
    setOpen(prev => !prev)
    console.log(open);
  }

  return <CommentsContext.Provider value={{ ShowComments, open, distance, setDistance }}>{children}</CommentsContext.Provider>
}
