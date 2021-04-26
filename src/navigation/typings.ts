import { NavScreenNameMain } from '@constants/navigation'

export type ProfilesListScreenParams = { searchInputText?: string }

export type MainStackParamList = {
  [NavScreenNameMain.ProfilesList]: ProfilesListScreenParams
}
