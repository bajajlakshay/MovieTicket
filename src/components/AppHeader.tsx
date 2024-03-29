import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const AppHeader = (props: any) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.iconBg} onPress={()=>props.action()}>
            <CustomIcon name={props.name} style={styles.iconStyle}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.header}</Text>
        <View style={styles.emptyContainer}></View>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    iconStyle:{
        color:COLORS.White,
        fontSize:FONTSIZE.size_24
    },
    headerText:{
        flex:1,
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_20,
        textAlign:'center',
        color:COLORS.White
    },
    emptyContainer:{
        height:SPACING.space_20 * 2,
        width:SPACING.space_20 * 2
    },
    iconBg:{
        height:SPACING.space_20*2,
        width:SPACING.space_20 * 2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:BORDERRADIUS.radius_25,
        backgroundColor:COLORS.Orange,
    }
})