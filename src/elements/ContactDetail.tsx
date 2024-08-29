import React from 'react'

interface Props {
  direction: string
  icon: string
  iconStyle: string
  text: string
  textStyle: string
}

export const ContactDetail: React.FC<Props> = ({
  icon,
  iconStyle,
  text,
  textStyle,
  direction,
}) => {
  return (
    <div className={direction}>
      <div className={iconStyle}>
        <img className="w-full h-full" src={icon} alt="Icon" />
      </div>
      <div>
        <p className={`break-all ${textStyle}`}>{text}</p>
      </div>
    </div>
  )
}
