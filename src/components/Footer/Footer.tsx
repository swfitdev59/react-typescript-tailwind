import React, { useState } from 'react'

import CallSvg from 'assets/call.svg'
import CloseSvg from 'assets/close.svg'
import CompassLogoSvg from 'assets/compass-logo.svg'
import CounterSvg from 'assets/contour.svg'
import FacebookFilSvg from 'assets/facebook-fill.svg'
import FacebookSvg from 'assets/facebook.svg'
import InstagramFillSvg from 'assets/instagram-fill.svg'
import InstagramSvg from 'assets/instagram.svg'
import LocationSvg from 'assets/location.svg'
import LogoSvg from 'assets/logo.svg'
import MailSvg from 'assets/mail.svg'
import MenuSvg from 'assets/menu.svg'
import { navbarItems } from 'config'
import { Card, ContactDetail } from 'elements'

export const Footer: React.FC = () => {
  const contacts = [
    {
      direction: 'flex flex-col gap-4',
      icon: LocationSvg,
      iconStyle: 'h-9 w-9 max-xl:h-6 max-xl:w-6',
      text: '10050 Baltimore National Pike Ellicott City, MD, 21042',
      textStyle: 'text-base max-xl:text-sm',
    },
    {
      direction: 'flex flex-col gap-4',
      icon: CallSvg,
      iconStyle: 'h-9 w-9 max-xl:h-6 max-xl:w-6',
      text: '(410) 914-7355',
      textStyle: 'text-base max-xl:text-sm',
    },
    {
      direction: 'flex flex-col gap-4',
      icon: MailSvg,
      iconStyle: 'h-9 w-9 max-xl:h-6 max-xl:w-6',
      text: 'Nick@BayStatesHomeGroup.com',
      textStyle: 'text-base max-xl:text-sm',
    },
  ]
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-15 px-12.5 py-10 max-xl:px-4 max-xl:gap-10">
        <div className="self-center w-37 h-27.5 max-xl:w-25 max-xl:h-18">
          <img className="w-full h-full" src={LogoSvg} alt="Logo" />
        </div>
        <div className="grid xl:grid-cols-3 gap-5">
          {contacts.map((item, index: number) => (
            <Card key={index} cardStyle="p-5 xl:p-9 rounded-md bg-white w-full">
              <ContactDetail
                key={index}
                direction={item.direction}
                icon={item.icon}
                iconStyle={item.iconStyle}
                text={item.text}
                textStyle={item.textStyle}
              />
            </Card>
          ))}
        </div>
        <div className="grid xl:grid-cols-3 text-white gap-5">
          <div className="flex flex-col gap-5 text-base self-end max-xl:items-center">
            <p className="font-bold">POPULAR PAGE</p>
            {navbarItems.map((item, index: number) => (
              <div
                className="hover:cursor-pointer hover:opacity-70"
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-xl:items-center max-xl:text-center">
              <div className="w-43 h-18">
                <img
                  className="w-full h-full"
                  src={CounterSvg}
                  alt="Counter Mortgage"
                />
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                <p className="font-semibold">David Ferrell</p>
                <p className="font-normal">Senior Mortgage Loan Officer</p>
                <p className="font-semibold">Computer Mortgage</p>
                <p className="font-normal">NMLS# 917155</p>
                <p className="font-normal">
                  <span className="font-semibold">Email: </span>
                  dferrell@contourmtg.com
                </p>
                <p className="font-normal">
                  <span className="font-semibold">Phone: </span>
                  (443) 517-9546
                </p>
                <p className="font-normal">555 Fairmount Ave, Suite 301</p>
                <p className="font-normal">Towson, MD. 21286</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-xl:items-center max-xl:text-center">
              <div className="w-42 h-6">
                <img
                  className="h-full w-full"
                  src={CompassLogoSvg}
                  alt="Compass Logo"
                />
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                <p className="font-semibold">©Compass 2023</p>
                <p className="font-normal">All Rights Reserved</p>
                <p className="font-normal">
                  <span className="font-semibold">Office: </span>
                  410-220-5745
                </p>
              </div>
            </div>
          </div>
          <div className="justify-end self-end flex gap-8 max-xl:justify-center max-xl:self-start">
            <div className="w-9 h-9 max-xl:w-6 max-xl:h-6">
              <img
                className="w-full h-full"
                src={FacebookFilSvg}
                alt="Facebook"
              />
            </div>
            <div className="w-9 h-9 max-xl:w-6 max-xl:h-6">
              <img
                className="w-full h-full"
                src={InstagramFillSvg}
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-12.5 py-10 border-t-2 border-white text-white max-xl:px-4">
        <p className="font-light text-xs max-xl:text-center">
          Copyright © 2023 BRIGHT, All Rights Reserved. Information Deemed
          Reliable But Not Guaranteed. The information provided by this website
          is for the personal, non-commercial use of consumers and may not be
          used for any purpose other than to identify prospective properties
          consumers may be interested in purchasing. The data relating to real
          estate for sale on this website appears in part through the BRIGHT
          Internet Data Exchange program, a voluntary cooperative exchange of
          property listing data between licensed real estate brokerage firms in
          which participates, and is provided by BRIGHT through a licensing
          agreement. Data last updated: Tue Oct 10 2023 05:57:25 GMT+0000
          (Coordinated Universal Time) Some properties which appear for sale on
          this website may no longer be available because they are under
          contract, have Closed or are no longer being offered for sale. Some
          real estate firms do not participate in IDX and their listings do not
          appear on this website. Some properties listed with participating
          firms do not appear on this website at the request of the seller.
        </p>
      </div>
    </div>
  )
}
