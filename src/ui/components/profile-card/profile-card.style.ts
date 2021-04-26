import { StyleSheet } from 'react-native'

import { getRelativeWidth } from '@utils/dimensions'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: getRelativeWidth(8),
    borderRadius: getRelativeWidth(8),
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingBottom: 0,
  },
  basicDataWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: getRelativeWidth(8),
    borderBottomWidth: getRelativeWidth(1),
    borderBottomColor: 'transparent',
  },
  basicDataWrapperWithBorder: {
    borderBottomWidth: getRelativeWidth(1),
    borderBottomColor: '#000000',
    borderStyle: 'solid',
  },
  leftSideWrapper: {
    flex: 1,
  },
  nameWrapper: {},
  nameText: {
    fontWeight: '600',
    fontSize: getRelativeWidth(18),
    lineHeight: getRelativeWidth(30),
    color: 'black',
    flexDirection: 'row',
  },
  nameTextHeighlighted: {
    backgroundColor: 'red',
  },
  baseText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: getRelativeWidth(13),
    lineHeight: getRelativeWidth(20),
  },
  emailWrapper: {
    marginTop: getRelativeWidth(5),
  },
  emailText: {},
  titleWrapper: {
    marginTop: getRelativeWidth(5),
  },
  titleText: {},
  addressWrapper: {
    marginTop: getRelativeWidth(5),
  },
  addressText: {},
  rightSideWrapper: {},
  imageWrapper: {
    height: getRelativeWidth(105),
    width: getRelativeWidth(105),
    backgroundColor: '#C4C4C4',
    borderRadius: getRelativeWidth(4),
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  bookmarkBtnWrapper: {
    position: 'absolute',
    top: getRelativeWidth(6),
    right: getRelativeWidth(7),
  },
  bookmarkIconImageWrapper: {
    height: getRelativeWidth(20),
    width: getRelativeWidth(14),
  },
  bookmarkIconImage: {
    height: '100%',
    width: '100%',
  },
  descriptionWrapper: {
    marginTop: getRelativeWidth(8),
  },
  description: {},
})
