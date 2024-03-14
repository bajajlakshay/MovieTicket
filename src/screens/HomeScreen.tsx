import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, StatusBar, FlatList } from 'react-native';

import { upcomingMovies, nowPlayingMovies, popularMovies, baseImagePath } from '../api/apicalls'
import { useEffect, useState } from 'react';
import { COLORS, SPACING } from '../theme/theme';
import InputHeader from '../components/InputHeader';
import SearchScreen from './SearchScreen';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCart from '../components/SubMovieCart';
import MovieCard from '../components/MovieCard';
import MovieDetailsScreen from '../screens/MovieDetailsScreen'

const { width, height } = Dimensions.get("window")


const getNowPlayingList = async () => {
  try {
    let response = await fetch(nowPlayingMovies)
    let json = await response.json()
    return json;
  } catch (error) {
    console.error("something went wrong in this function")
  }
}

const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies)
    let json = await response.json()
    return json;
  } catch (error) {
    console.error("something wen wrong in this function")
  }
}
const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies)
    let json = await response.json()
    return json
  }
  catch (error) {
    console.error('something went wrong in this function')
  }
}

const HomeScreen = ({ navigation }: any) => {

  const searchMovieList = () => {
    navigation.navigate('Search')
  }
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined)
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined)
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined)

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingList();
      setNowPlayingMoviesList([{id:'dummy1'},...tempNowPlaying.results,{id:'dummy2'}])

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results)

      let tempPopularMovies = await getPopularMoviesList();
      setPopularMoviesList(tempPopularMovies.results)
    })();
  }, [])


  if (nowPlayingMoviesList == null && nowPlayingMoviesList == undefined && upcomingMoviesList == undefined && upcomingMoviesList == null && popularMoviesList == null && popularMoviesList == undefined) {
    return (<ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar hidden={true} />
      <View style={styles.searchContainer}>
        <InputHeader searchFunction={searchMovieList} />
      </View>
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.Orange} size={'large'} />
      </View>
    </ScrollView>)
  }
  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar hidden={true} />
      <View style={styles.searchContainer}>
        <InputHeader searchFunction={searchMovieList} />
      </View>
      <CategoryHeader title={'Now Playing'} />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        contentContainerStyle={styles.containerGap36}
        decelerationRate={'normal'}
        renderItem={({ item, index }) => {
          if(!item.original_title)
          {
            return(
              <View style={{width: (width - (width*0.7 + SPACING.space_36 * 2)) /  2}}></View>
            )
          }
          return (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieScreen', { movieid: item.id });
            }}
            cardWidth={width * 0.7}
            isFirst={index == 0 ? true : false}
            isLast={index == nowPlayingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w780', item.poster_path)}
            genre={item.genre_ids.slice(1, 4)}
            vote_avg={item.vote_average.toFixed(2)}
            vote_count={item.vote_count}
          />)
        }}
      />
      <CategoryHeader title={'Popular'} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCart
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieScreen', { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == popularMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
      <CategoryHeader title={'Upcoming'} />
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCart
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieScreen', { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
    </ScrollView>
  );

};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    alignItems: 'center'
  },
  containerGap36: {
    gap: SPACING.space_36
  }
});
