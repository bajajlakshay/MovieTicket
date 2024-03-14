import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';
import InputHeader from '../components/InputHeader';
import { baseImagePath, searchMovies } from '../api/apicalls';
import { useState } from 'react';
import SubMovieCart from '../components/SubMovieCart';
import MovieDetailsScreen from './MovieDetailsScreen';

const { width, height } = Dimensions.get("window")

const SearchScreen  = ({navigation}:any) => {

  const [searchList,setSearchList] = useState()

  const searchMoviesFunction = async (name: string) =>{
    try{
      let response = await fetch(searchMovies(name))
      let json = await response.json()
      setSearchList(json.results);
    }
    catch(error)
    {
      console.warn("something is wrong with the function ")
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View>
      <FlatList
        data={searchList}
        keyExtractor={(item: any) => item.id}
        horizontal={false}
        bounces={false}
        numColumns={2}
        ListHeaderComponent={
          <View style={styles.searchContainer}>
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>
        }
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCart
            shoudlMarginatedAtEnd={false}
            shouldMarginatedAround={true}
            cardFunction={() => {
              navigation.push('MovieScreen', { movieid: item.id });
            }}
            cardWidth={width / 2 - SPACING.space_12}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
  )}
      />
      </View>
    </View>
  );
};

export default SearchScreen ;

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    backgroundColor: COLORS.Black,
    width:width,
    alignItems:'center',
    justifyContent:'center'
  },
  searchContainer: {
    display:"flex",
    alignItems: 'center'
  },
  containerGap36: {
    alignItems:'center',
    gap: SPACING.space_36
  },
});


