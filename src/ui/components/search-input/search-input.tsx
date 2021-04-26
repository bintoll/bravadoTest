import React, { FC, memo } from 'react'
import { Image, TextInput, TextInputProps, View } from 'react-native'

import { styles } from './search-input.style'

interface Props {
  value: TextInputProps['value']
  onChangeText: TextInputProps['onChangeText']
}

const searchIconImage = require('./search.png')

export const SearchInput: FC<Props> = memo(({ value, onChangeText }) => (
  <View style={styles.root}>
    <View style={styles.searchIconWrapper}>
      <Image style={styles.searchIconImage} source={searchIconImage} />
    </View>
    <View style={styles.inputWrapper}>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} />
    </View>
  </View>
))
