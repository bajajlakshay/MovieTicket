import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const CastCard = (props: any) => {
    return (
      <View
        style={[
          styles.container,
          props.shouldMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft: SPACING.space_24}
              : props.isLast
              ? {marginRight: SPACING.space_24}
              : {}
            : {},
          {maxWidth: props.cardWidth},
        ]}>
        <Image
          source={{uri: props.imagePath}}
          style={[styles.cardImage, {width: props.cardWidth}]}
        />
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {props.subtitle}
        </Text>
      </View>
    );
  };

export default CastCard

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    cardImage:{
        borderRadius:BORDERRADIUS.radius_25*4,
        aspectRatio: 1980/2880

      },
    title:{
        alignSelf:"stretch",
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_12,
        color:COLORS.White
    },
    subTitle:{
        alignSelf:"stretch",
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_10,
        color:COLORS.White
    }
})