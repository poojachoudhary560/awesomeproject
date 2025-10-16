import { FlatList, StyleSheet, Text, View } from 'react-native';
import SongCardWithCategory from '../components/SongCardWithCategory';
import Header from '../components/Header';
import FloatingPlayer from '../components/FloatingPlayer';
import { colors } from '../constants/colors';
import { songsWithCategory } from '../data/songsWithCategory';
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={SongCardWithCategory}
        contentContainerStyle={{
          paddingBottom: 500,
        }}
      />
      <FloatingPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 60,
  },
});

export default HomeScreen;
