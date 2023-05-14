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
    <div className='ml-[110px] relative flex items-start text-black'>
     <div className="flex absolute">
        <ProfileCard showCard={showCard} />
        <span onClick={handleProfile } className='text-xl'><MdMenu /></span>
     </div>
      <div className="block absolute right-0">
        <ProfileForm />
      </div>
    </div>
  )
}

export default ProfilePage
