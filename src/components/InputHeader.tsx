import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'

const InputHeader = (props:any) => {

    const [search,setSearch] = useState<string>('')

  return (
    <View style={styles.inputBox}>
        <TextInput placeholder='search for a movie' onChangeText={(text)=>(setSearch(text))} value={search} style={styles.inputText}>
        </TextInput>
        <TouchableOpacity style={styles.searchIcon} onPress={()=>props.searchFunction(search)}
        >
            <CustomIcon name='search' color={COLORS.WhiteRGBA75} size={FONTSIZE.size_20} />
        </TouchableOpacity>
    </View>
  )
}

export default InputHeader

const styles = StyleSheet.create({
    inputBox:{
        display:'flex',
        paddingVertical:SPACING.space_8,
        paddingHorizontal:SPACING.space_24,
        borderWidth:2,
        borderColor:COLORS.WhiteRGBA15,
        borderRadius: BORDERRADIUS.radius_25,
        flexDirection:'row'
    },
    inputText:{
        color:COLORS.White,
        fontSize: FONTSIZE.size_14,
        width:'90%',
        fontFamily:FONTFAMILY.poppins_regular,
    },
    searchIcon:{
        display:'flex',
        justifyContent:'center',
        paddingHorizontal:5
    }
})