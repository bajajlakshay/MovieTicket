import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const CategoryHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headTxt}>{props.title}</Text>
    </View>
  )
}

export default CategoryHeader

const styles = StyleSheet.create({
    container:{

    },
    headTxt:{
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_20,
        color: COLORS.White,
        backgroundColor:COLORS.Black,
        paddingHorizontal: SPACING.space_36,
        paddingVertical:SPACING.space_28,

    }
})