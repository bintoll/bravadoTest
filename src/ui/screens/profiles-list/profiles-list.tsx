import React, { Component } from 'react'
import { FlatList, View, ListRenderItem, LayoutAnimation } from 'react-native'

import { NavigationProp, RouteProp } from '@react-navigation/core'
import { Api, Profile } from 'src/api/api'

import { NavScreenNameMain } from '@constants/navigation'

import { MainStackParamList } from '@navigation/typings'

import { ProfileCard } from '@components/profile-card/profile-card'
import { SearchInput } from '@components/search-input/search-input'

import { styles } from './profiles-list.style'

type ProfilesListScreenRouteProp = RouteProp<MainStackParamList, NavScreenNameMain.ProfilesList>

interface Props {
  route: ProfilesListScreenRouteProp
}
interface State {
  profiles: Profile[]
  searchInputText: string
  curActiveProfile?: number
  bookmarkedProfiles: number[]
}

export class ProfilesListScreen extends Component<Props, State> {
  public state = {
    profiles: [],
    searchInputText: this.props.route.params?.searchInputText || '',
    bookmarkedProfiles: [] as number[],
    curActiveProfile: undefined,
  }

  public async componentDidMount() {
    const getProfilesResponse = await Api.sharedInstance.getProfiles()
    this.setState({ profiles: getProfilesResponse.data })
  }

  public componentWillReceiveProps(nextProps: Props) {
    const { route } = nextProps
    this.setState({ searchInputText: route.params?.searchInputText || '' })
  }

  public render() {
    const { profiles, searchInputText } = this.state
    const { route } = this.props
    console.log('searchInputText', route.params?.searchInputText)
    return (
      <View style={styles.root}>
        <FlatList
          data={profiles.filter((item: Profile) => !searchInputText || item.name.includes(searchInputText))}
          stickyHeaderIndices={[0]}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={this.renderProfileCard}
          ListHeaderComponent={this.renderListHeader}
          keyExtractor={this.keyExtractorProfileCard}
        />
      </View>
    )
  }

  private renderListHeader = () => {
    const { searchInputText } = this.state
    return (
      <View style={styles.headerWrapper}>
        <SearchInput value={searchInputText} onChangeText={this.onChangeSearchInputText} />
      </View>
    )
  }

  private renderProfileCard: ListRenderItem<Profile> = ({ item, index }) => {
    const { curActiveProfile, bookmarkedProfiles, searchInputText } = this.state

    return (
      <View style={[styles.profileCardWrapper, index !== 0 && styles.profileCardWrapperNotFirst]}>
        <ProfileCard
          index={index}
          profile={item}
          searchText={searchInputText}
          isActive={index === curActiveProfile}
          isBookmarked={bookmarkedProfiles.includes(index)}
          onPressCard={() => this.onPressCard(index)}
          onPressBookmark={() => this.onPressBookmark(index)}
        />
      </View>
    )
  }

  private onChangeSearchInputText = (value: string) => {
    this.setState({ searchInputText: value })
  }

  private keyExtractorProfileCard = (item: Profile, index: number) => `profile_card_${item.name}_${index}`

  private onPressCard = (index: number) => {
    const { curActiveProfile } = this.state
    LayoutAnimation.linear()
    this.setState({ curActiveProfile: curActiveProfile === index ? undefined : index })
  }

  private onPressBookmark = (index: number) => {
    const bookmarkedProfilesNewState = [...this.state.bookmarkedProfiles]
    const bookmarkProfileIndex = bookmarkedProfilesNewState.indexOf(index)
    if (bookmarkProfileIndex !== -1) {
      bookmarkedProfilesNewState.splice(bookmarkProfileIndex, 1)
    } else {
      bookmarkedProfilesNewState.push(index)
    }
    this.setState({ bookmarkedProfiles: bookmarkedProfilesNewState })
  }
}
