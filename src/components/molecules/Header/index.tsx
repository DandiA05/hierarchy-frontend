'use client'

import React, { useEffect, useState } from 'react'

import moment from 'moment'
import Profile from '@components/atoms/Profile'

// now indonesia
const today = moment().locale('id').format('dddd, DD MMMM YYYY')

export default function Header() {
  const [currentTime, setCurrentTime] = useState(moment().locale('id').format('HH:mm:ss'))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().locale('id').format('HH:mm:ss'))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <header className="flex flex-row bg-primary py-4 px-6">
      <div className="flex flex-row flex-1 items-center">
        <div className="ml-2 border-l-2 border-['#C2C2C2'] px-2">
          <h1 className="font-semibold text-teksPrimary text-base">Soal Test</h1>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <div className="mr-2 border-r-2 border-['#C2C2C2'] px-2 font-semibold">
          <h3>{today}</h3>
        </div>
        <div className="bg-[#F5F5F5] px-2 py-1 rounded-md">
          <h1 className="font-semibold text-teksPrimary text-base">{currentTime} WIB</h1>
        </div>

        <Profile />
      </div>
    </header>
  )
}
