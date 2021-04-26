import React, { FC, memo } from 'react'
import { Image, Text, View, TouchableOpacity, Animated, UIManager } from 'react-native'

import { Profile } from '@api/api'

import { loremIpsum } from '@constants/text'

import { renderHeightlightedName } from '@utils/text'

import { styles } from './profile-card.style'

interface Props {
  index: number
  profile: Profile
  isActive: boolean
  searchText: string
  isBookmarked: boolean
  onPressCard: () => void
  onPressBookmark: () => void
}

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

const bookmarkImage = require('./bookmark.png')
const bookmarkPlaceholderImage = require('./bookmarkPlaceholder.png')

export const ProfileCard: FC<Props> = memo(
  ({ profile, isActive, isBookmarked, onPressCard, onPressBookmark, searchText, index }) => {
    const renderDescription = () =>
      isActive && (
        <View style={styles.descriptionWrapper}>
          <Text style={[styles.baseText, styles.description]}>{loremIpsum}</Text>
        </View>
      )

    return (
      <TouchableOpacity onPress={onPressCard}>
        <Animated.View style={styles.root}>
          <View style={[styles.basicDataWrapper, isActive && styles.basicDataWrapperWithBorder]}>
            <View style={styles.leftSideWrapper}>
              <View style={styles.nameWrapper}>
                <Text style={styles.nameText}>
                  {renderHeightlightedName(profile.name, searchText, styles.nameTextHeighlighted, index)}
                </Text>
              </View>
              <View style={styles.emailWrapper}>
                <Text style={[styles.baseText, styles.emailText]}>{profile.email}</Text>
              </View>
              <View style={styles.titleWrapper}>
                <Text style={[styles.baseText, styles.titleText]}>{profile.title}</Text>
              </View>
              <View style={styles.addressWrapper}>
                <Text style={[styles.baseText, styles.addressText]}>{`${profile.address} ${profile.city}`}</Text>
              </View>
            </View>
            <View style={styles.rightSideWrapper}>
              <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: profile.avatar }} />
              </View>
              <View style={styles.bookmarkBtnWrapper}>
                <TouchableOpacity onPress={onPressBookmark}>
                  <View style={styles.bookmarkIconImageWrapper}>
                    <Image
                      style={styles.bookmarkIconImage}
                      source={isBookmarked ? bookmarkImage : bookmarkPlaceholderImage}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {renderDescription()}
        </Animated.View>
      </TouchableOpacity>
    )
  },
)
