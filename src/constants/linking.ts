import { LinkingOptions } from '@react-navigation/native'

import { NavScreenNameMain } from './navigation'

export const linking: LinkingOptions = {
  prefixes: ['http://ourwebsite.com', 'bravadoTest://'],
  config: {
    initialRouteName: NavScreenNameMain.ProfilesList,
    screens: {
      [NavScreenNameMain.ProfilesList]: '/search/:searchInputText',
    },
  },
}
