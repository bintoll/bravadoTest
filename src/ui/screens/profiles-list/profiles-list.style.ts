import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  flatListContentContainerStyle: {
    paddingHorizontal: getRelativeWidth(16),
  },
  headerWrapper: {
    width: '100%',
    marginBottom: getRelativeWidth(20),
    marginTop: getRelativeWidth(10),
  },
  profileCardWrapper: {},
  profileCardWrapperNotFirst: {
    marginTop: getRelativeWidth(14.72),
  },
})
