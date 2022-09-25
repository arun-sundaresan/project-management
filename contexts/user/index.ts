import { createContext, useContext } from 'react'
import { UserProfile } from '../../models/profile'

export const defaultUser = {
  profile: {} as UserProfile,
}

export const UserContext = createContext({
  profile: defaultUser.profile,
  updateProfile: (profile: UserProfile) => {},
})

export const useUSerContext = () => useContext(UserContext)
