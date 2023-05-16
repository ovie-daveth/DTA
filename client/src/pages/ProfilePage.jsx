import React, { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import ProfileForm from '../components/ProfileForm'
import { MdMenu } from 'react-icons/md'

const ProfilePage = () => {
  const [showCard, setShowCard] = useState(false)
  const handleProfile = () => {
    setShowCard(!showCard)
  }
  return (
    <>
      <span onClick={handleProfile } className='lg:text-3xl md:text-2xl absolute top-0 left-28'><MdMenu /></span>
      <div className={`ml-[110px] flex items-start text-black `}>
          <ProfileCard showCard={showCard} />
          <ProfileForm showCard={showCard} />
      </div>
    </>
  )
}

export default ProfilePage
