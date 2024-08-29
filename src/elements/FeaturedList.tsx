import React from 'react'

import VectorSvg from 'assets/vector.svg'

interface Props {
  img: string
  title: string
  address: string
  price: string
  beds: string
  baths: string
  sqft: string
  listed: string
}

export const FeaturedList: React.FC<Props> = ({
  img,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  listed,
}) => {
  return (
    <div className="w-78 pr-5 font-sans">
      <div className="flex flex-col border-solid border-2 border-gray-400">
        <div className="relative">
          <img className="h-full" src={img} alt="Featured List" />
          <p className="absolute top-2 left-4 text-sm font-normal text-white">
            COMING SOON
          </p>
          <img
            className="absolute bottom-1 left-1 w-10 h-10 py-2.5 rounded-full bg-black/60 hover:cursor-pointer hover:opacity-70"
            src={VectorSvg}
            alt="Location Vector"
          />
        </div>
        <div className="flex flex-col text-black text-center">
          <div className="py-4">
            <p className="text-sm">{title}</p>
            <p className="text-xs">{address}</p>
          </div>
          <div className="grid grid-cols-4 text-xs shadow">
            <div className="border-solid border-1">
              <p>Price</p>
              <p>{price}</p>
            </div>
            <div className="border-solid border-1">
              <p>Beds</p>
              <p>{beds}</p>
            </div>
            <div className="border-solid border-1">
              <p>Baths</p>
              <p>{baths}</p>
            </div>
            <div className="border-solid border-1">
              <p>Sqft</p>
              <p>{sqft}</p>
            </div>
          </div>
          <p className="py-4 text-gray-600 text-sm">Listed {listed} Day Ago</p>
        </div>
      </div>
    </div>
  )
}
