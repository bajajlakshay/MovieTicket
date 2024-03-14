import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'

const SettingComponent = (props:any) => {
    return (
      <View style={styles.constainer}>
        <View>
        <CustomIcon name={props.icon} style={styles.iconStyle}/>
        </View>
        <View style={styles.settingContainer}>
            <Text style={styles.title}>
                {props.heading}
            </Text>
            <Text style={styles.subTitle}>
                {props.subheading}
            </Text>
            <Text style={styles.subTitle}>
                {props.subtitle}
            </Text>
        </View>
        <View style={styles.iconBg}>
            <CustomIcon name={'arrow-right'} style={styles.iconStyle}/>
        </View>
     </View>
    )

}

const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        paddingVertical:SPACING.space_20
    },
    settingContainer:{
        flex:1,
    },
    iconStyle:{
        color:COLORS.White,
        fontSize:FONTSIZE.size_24,
        paddingHorizontal:SPACING.space_20
    },
    title:{
        fontFamily:FONTFAMILY.poppins_bold,
        fontSize:FONTSIZE.size_16
    },
    subTitle:{
        fontFamily:FONTFAMILY.poppins_light,
        fontSize:FONTSIZE.size_14,
        marginTop:SPACING.space_10 - 5,
        color:COLORS.WhiteRGBA50
    },
    iconBg:{
      justifyContent:'center', 
    }
})

export default SettingComponent