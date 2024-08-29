import React from 'react'

import { Header } from 'components'
import { Footer } from 'components'

interface Props {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
