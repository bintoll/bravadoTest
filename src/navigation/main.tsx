import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { linking } from '@constants/linking'
import { NavScreenNameMain } from '@constants/navigation'

import { ProfilesListScreen } from '@screens/profiles-list'

import type { MainStackParamList } from './typings'

const MainStack = createStackNavigator<MainStackParamList>()

interface Props {}

export const MainNavigation: React.NamedExoticComponent<React.PropsWithChildren<Props>> = React.memo(() => (
  <NavigationContainer linking={linking}>
    <MainStack.Navigator initialRouteName={NavScreenNameMain.ProfilesList} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={NavScreenNameMain.ProfilesList} component={ProfilesListScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
))
