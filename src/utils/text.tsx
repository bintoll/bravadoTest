import React from 'react'
import { Text, TextStyle } from 'react-native'

export const renderHeightlightedName = (
  text: string,
  searchText: string,
  heighlightedStyle: TextStyle,
  index: number,
) => {
  if (searchText) {
    const words = searchText.split(/\s+/g).filter((word) => word.length)
    const pattern = words.join('|')
    const regExp = new RegExp(pattern, 'gi')
    const children = []
    let beforeSearchText,
      match,
      position = 0
    const matches = text.match(regExp)

    if (matches != null) {
      for (match of matches) {
        match = regExp.exec(text)
        if (match) {
          if (position < match.index) {
            beforeSearchText = text.substring(position, match.index)
            if (beforeSearchText.length) {
              children.push(beforeSearchText)
            }
          }
          const highlightedText = (
            <Text key={`${index}_${match.index}`} style={heighlightedStyle}>
              {match[0]}
            </Text>
          )
          children.push(highlightedText)
          position = match.index + match[0].length
        }
      }
    }
    if (position < text.length) {
      const afterSearchText = text.substring(position)
      children.push(afterSearchText)
    }
    return children
  } else {
    return text
  }
}
