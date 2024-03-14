import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {} from 'react-native-vector-icons';
import {} from 'react-native-snackbar';
import TabNavigator from './navigators/TabNavigator';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SeatBookingScreen from './screens/SeatBookingScreen';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator}options={{animation:'default'}}/>
        <Stack.Screen name='MovieScreen' component={MovieDetailsScreen} options={{animation:'slide_from_left'}}/>
        <Stack.Screen name='Seat' component={SeatBookingScreen} options={{animation:'slide_from_bottom'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})

export default App

