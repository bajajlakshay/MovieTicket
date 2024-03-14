import { Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon';

const genres: any = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentry',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystry',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };
  
const MovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
      <View
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft: SPACING.space_36}
              : props.isLast
              ? {marginRight: SPACING.space_36}
              : {}
            : {},
          props.shouldMarginatedAround ? {margin: SPACING.space_12} : {},
          {maxWidth: props.cardWidth},
        ]}>
        <Image
          style={[styles.cardImage, {width: props.cardWidth}]}
          source={{uri: props.imagePath}}
        />
        <View>
        <View style={styles.ratingContainer}>
        <CustomIcon name='star' style={styles.starIcon}/>
        <Text style={styles.votingTxt}>{props.vote_avg}({props.vote_count})</Text>
        </View>
        <Text style={styles.titleTxt}>{props.title}</Text>
        <View style={styles.genreContainer}>{props.genre.map((item: any)=>(<View key={item} style={styles.genreTxt}>
          <Text style={{color:COLORS.White, fontSize:FONTSIZE.size_12, fontFamily:FONTFAMILY.poppins_regular}}>{genres[item]}</Text>
        </View>))}</View>
        </View>
      </View>
    </TouchableOpacity>
     
    
  )
}

const styles = StyleSheet.create({
    container:{display:'flex',
flex:1,
backgroundColor:COLORS.Black
},
cardImage:{
 aspectRatio:2/3,
 borderRadius:BORDERRADIUS.radius_20,

},
headTxt:{
    fontFamily:FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_14,
    color:COLORS.White,
    textAlign:'center',
    paddingVertical:SPACING.space_10,
},
ratingContainer:{
    flexDirection:'row',
    gap:SPACING.space_10,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop: SPACING.space_10
},
starIcon:{
    fontSize:20,
    color:COLORS.Yellow,
},
votingTxt:{
    color:COLORS.White,
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_14
},
titleTxt:{
    fontSize:FONTSIZE.size_24,
    color:COLORS.White,
    alignSelf:'center',
    justifyContent:'center',
    fontFamily:FONTFAMILY.poppins_semibold
},
genreContainer:{
  flex:1,
  flexDirection:'row',
  gap:SPACING.space_20,
  justifyContent:'center',
  flexWrap:'wrap',
},
genreTxt:{
  borderWidth:1,
  borderColor:COLORS.WhiteRGBA15,
  borderRadius:10,
  padding:3,
  elevation:10
}
})

export default MovieCard