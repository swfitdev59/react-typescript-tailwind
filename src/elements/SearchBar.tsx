import React from 'react'

interface Props {
  img: string
  imgStyle: string
  input: string
  inputStyle: string
  button: string
  buttonStyle: string
}

export const SearchBar: React.FC<Props> = ({
  img,
  imgStyle,
  input,
  inputStyle,
  button,
  buttonStyle,
}) => {
  return (
    <div className="relative">
      <img
        className={`absolute opacity-50 ${imgStyle}`}
        src={img}
        alt="Search Logo"
      />
      <input
        className={`rounded-l-lg text-nowrap text-ellipsis ${inputStyle}`}
        type="text"
        placeholder={input}
      />
      <button className={`rounded-r-lg ${buttonStyle}`}>{button}</button>
    </div>
  )
}
