import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

const searchIconWidth = getRelativeWidth(14)
const searchIconMargin = getRelativeWidth(12.5)

export const styles = StyleSheet.create({
  root: {
    height: getRelativeWidth(30.28),
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: getRelativeWidth(8),
    overflow: 'hidden',
  },
  searchIconWrapper: {
    height: getRelativeWidth(14),
    width: searchIconWidth,
    marginLeft: searchIconMargin,
  },
  searchIconImage: {
    height: '100%',
    width: '100%',
  },
  inputWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: searchIconWidth + searchIconMargin * 2,
  },
})
