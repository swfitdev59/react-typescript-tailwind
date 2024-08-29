import React from 'react'
import Slider from 'react-slick'

import LocationSvg from 'assets/location.svg'
import AboutUsImg from 'assets/about_us.svg'
import IndianTrailWaySvg from 'assets/indian_trail_way.svg'

import { MainLayout } from 'layouts'
import { Card, ContactDetail, NextArrow, PrevArrow, SearchBar } from 'elements'
import { FeaturedList } from 'elements'
import {
  featuredLists,
  contacts,
  whyUs,
  neighborhoodsLeft,
  neighborhoodsRight,
} from 'config'

export const Home: React.FC = () => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div>
      <MainLayout>
        <div className="flex flex-col justify-center items-center gap-10 text-center bg-home-img bg-cover bg-center w-full min-h-screen">
          <p className="text-white font-bold text-6xl max-xl:text-4xl">
            YOUR NEXT MOVE STARS HERE!
          </p>
          <SearchBar
            img={LocationSvg}
            imgStyle="top-3 xl:top-4 left-4 h-5 w-5 xl:h-6 xl:w-6"
            input="Start your search by City, Neighborhood or Zipcode"
            inputStyle="pl-12 p-3 w-60 xl:pl-12 xl:p-4 xl:w-150 text-sm xl:text-base"
            button="SEARCH"
            buttonStyle="p-3 xl:py-4 xl:px-8 bg-black text-white text-sm xl:text-base hover:bg-gray-800"
          />
        </div>

        <div className="flex flex-col gap-10 xl:gap-17.5 px-4 py-12.5 xl:px-12.5 xl:py-25 bg-black">
          <p className="font-bold text-2xl xl:text-4xl text-white">ABOUT US</p>
          <div className="grid xl:grid-cols-2 gap-10">
            <div>
              <img className="w-full" src={AboutUsImg} alt="About Us" />
            </div>
            <div className="self-end">
              <Card cardStyle="p-5 xl:p-9 rounded-md bg-white w-full">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-xl xl:text-2xl">
                      Nick & Cailean
                    </p>
                    <p className="font-normal text-base">
                      After having a lunch and catching up, Nick and Cailean
                      realized they shared a similar outlook on real estate.
                      Over the next few months they devised a plan to launch a
                      client-centric real estate team. Thus, The Bay States Home
                      Group was born. Their vision for The Bay States Home Group
                      is simple: Always put the client first and never stop
                      searching for ways to add value to the real estate
                      transaction. With 15 years of combined real estate
                      experience Nick and Cailean have the knowledge and skills
                      to help any client achieve their real estate goals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {contacts.map((item, index: number) => (
                      <ContactDetail
                        key={index}
                        direction={item.direction}
                        icon={item.icon}
                        iconStyle={item.iconStyle}
                        text={item.text}
                        textStyle={item.textStyle}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 xl:gap-17.5 px-4 py-17.5 xl:px-12.5 xl:py-37.5">
          <p className="font-bold text-2xl xl:text-4xl text-center">WHY US?</p>
          <div className="grid max-xl:grid-rows-3 xl:grid-cols-3 gap-5">
            {whyUs.map((item, index: number) => (
              <Card
                key={index}
                cardStyle="grid gap-12.5 p-5 xl:p-8 rounded-md shadow-md bg-white w-full"
              >
                <div className="self-start grid gap-5">
                  <img className="h-20 w-20" src={item.icon} alt="Search" />
                  <div className="grid gap-4">
                    <p className="font-bold text-base">{item.title}</p>
                    <p className="font-normal text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="self-end">
                  <button className="p-3 xl:py-4 xl:px-9 rounded-lg bg-black text-white text-sm xl:text-base hover:bg-gray-800">
                    READ MORE
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 xl:gap-17.5 px-4 pb-17.5 xl:px-12.5 xl:pb-37.5">
          <p className="font-bold text-2xl xl:text-4xl text-center">
            EXPLORE OUR NEIGHBORHOODS
          </p>
          <div className="grid xl:grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {neighborhoodsLeft.map((item, index: number) => (
                <Card key={index} cardStyle="relative w-full">
                  <img className="w-full" src={item.img} alt="HOWARD COUNTY" />
                  <p className="absolute bottom-0 left-0 text-white text-3xl xl:text-4xl font-bold p-5 xl:px-7.5 xl:py-10">
                    {item.name}
                  </p>
                </Card>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <Card cardStyle="relative w-full">
                <img
                  className="w-full"
                  src={IndianTrailWaySvg}
                  alt="INDIAN TRAIL WAY"
                />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full">
                  <div className="flex flex-col gap-4 px-8 py-5 xl:p-12.5 mx-5 my-auto xl:mx-32.5 rounded-lg text-center text-white backdrop-blur-sm bg-black/60">
                    <p className="font-bold text-xl">
                      9345 Indian Trail way 9345 Perry Hall MD 21128
                    </p>
                    <p className="text-base">9345 Perry Hall MD 21128</p>
                    <p className="text-base">5 beds 3 bath</p>
                    <p className="font-bold text-lg">$455, 000</p>
                  </div>
                </div>
              </Card>
              {neighborhoodsRight.map((item, index: number) => (
                <Card key={index} cardStyle="relative w-full">
                  <img className="w-full" src={item.img} alt="HOWARD COUNTY" />
                  <p className="absolute bottom-0 left-0 text-white text-3xl xl:text-4xl font-bold p-5 xl:px-7.5 xl:py-10">
                    {item.name}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 xl:gap-17.5 px-4 pb-17.5 xl:px-12.5 xl:pb-37.5">
          <p className="font-bold text-2xl xl:text-4xl text-center">
            FEATURED LISTINGS
          </p>
          <Slider {...settings}>
            {featuredLists.map((item, index: number) => (
              <FeaturedList
                key={index}
                img={item.img}
                title={item.title}
                address={item.address}
                price={item.price}
                beds={item.beds}
                baths={item.baths}
                sqft={item.sqft}
                listed={item.listed}
              />
            ))}
          </Slider>
        </div>
      </MainLayout>
    </div>
  )
}
