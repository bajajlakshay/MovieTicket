import React from "react";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";

import {COLORS,FONTSIZE,SPACING,BORDERRADIUS} from '../theme/theme'

import CustomIcon from "../components/CustomIcon";

import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MovieDetailsScreen from "../screens/MovieDetailsScreen";


const tab = createBottomTabNavigator()

const TabNavigator = () => {

    return(
    <tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarStyle:{
            backgroundColor:COLORS.Black,
            height:SPACING.space_10 * 8,
            borderTopWidth:0
        }
    }}
    >
        <tab.Screen name="Home Screen" component={HomeScreen} options={{
             tabBarIcon : ({focused,color,size}) =>{
                return(
                    <View style={[styles.activeTabs,focused?{backgroundColor:COLORS.Orange}:{}]}>
                    <CustomIcon name="video" size={focused ? FONTSIZE.size_30:FONTSIZE.size_24}/>
                    </View>
                )
             }
        }}/>
        
        <tab.Screen name="Search" component={SearchScreen}  options={{
             tabBarShowLabel:false,
             tabBarIcon : ({focused,color,size}) =>{
                return(
                    <View style={[styles.activeTabs,focused?{backgroundColor:COLORS.Orange}:{}]}>
                    <CustomIcon name="search"  size={ focused ? FONTSIZE.size_24:FONTSIZE.size_20}/>
                    </View>
                )
             }
        }}/>
        <tab.Screen name="Ticket" component={TicketScreen}  options={{
             tabBarShowLabel:false,
             tabBarIcon : ({focused,color,size}) =>{
                return(
                    <View style={[styles.activeTabs,focused?{backgroundColor:COLORS.Orange}:{}]}>
                    <CustomIcon name="ticket" size={focused ? FONTSIZE.size_30:FONTSIZE.size_24}/>
                    </View>
                )
             }
        }}/>
        <tab.Screen name="User" component={UserAccountScreen}  options={{
             tabBarShowLabel:false,
             tabBarIcon : ({focused,color,size}) =>{
                return(
                    <View style={[styles.activeTabs,focused?{backgroundColor:COLORS.Orange}:{}]}>
                    <CustomIcon name="user" size={focused ? FONTSIZE.size_24:FONTSIZE.size_16}/>
                    </View>
                )
             }
        }}/>
    </tab.Navigator>
    )
}


const styles = StyleSheet.create({
        activeTabs:{
            backgroundColor:COLORS.Black,
            color: COLORS.Orange,
            padding:SPACING.space_20,
            borderRadius:SPACING.space_36
        }
})

export default TabNavigator;