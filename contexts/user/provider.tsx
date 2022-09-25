import axios from 'axios'
import { useEffect, useState } from 'react'
import { defaultUser, UserContext } from '.'
import { UserProfile } from '../../models/profile'

const UserProvider = ({ children }: any) => {
  const [profile, setProfile] = useState(defaultUser.profile)

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/api/profile/read')
      setProfile(response.data)
    }

    getUser()
  }, [])

  const userContextValue = {
    profile: profile,
    updateProfile: (value: UserProfile) => {
      setProfile(value)
    },
  }

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>
}

export default UserProvider
