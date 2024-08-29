import React from 'react'

interface Props {
  cardStyle: string
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ cardStyle, children }) => {
  return <div className={cardStyle}>{children}</div>
}
