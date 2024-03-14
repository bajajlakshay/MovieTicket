import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import AppHeader from '../components/AppHeader';
import CustomIcon from '../components/CustomIcon';
import { Icon } from 'react-native-vector-icons/Icon';
import SettingComponent from '../components/SettingComponent';


const UserAccountScreen  = ({navigation,route}:any) => {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={'My Tickets'}
          action={() => navigation.navigate('Home Screen')}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/image/avatar.png')} style={styles.avatarImg}/>
        <Text style={styles.avatarTxt}> Lakshay Bajaj</Text>
      </View>
      <View style={styles.infoContainer}>
        <SettingComponent icon='user' heading="account" subheading='Edit Profile' subtitle="Change Password"/>
        <SettingComponent icon='setting' heading="settings" subheading='Theme' subtitle="Permissions"/>
        <SettingComponent icon='dollar' heading="Offer and refferals" subheading='Offers' subtitle="Refferals"/>
        <SettingComponent icon='info' heading="About" subheading='About Movies' subtitle="More"/>
      </View>
    </View>
    </ScrollView>
  );
};

export default UserAccountScreen ;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.Black
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  avatarImg:{
    width:100,
    height:100,
    marginTop:SPACING.space_20 * 4,
    borderRadius:100,

  },
  profileContainer:{
    justifyContent:'center',
    alignItems:'center'

  },
  avatarTxt:{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_16,
    marginTop:SPACING.space_16,
    color:COLORS.White
  },
  infoContainer:{

  }
});
