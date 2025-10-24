import { fontFamilies } from '../constants/fonts';
import { colors } from '../constants/colors';
import { fontSize, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

function SongCard({ item, containerStyle, imageStyle }) {
  const handlePlay = async () => {
    console.log(item);
    await TrackPlayer.add({
      ...item,
      url: require('../../assets/songs/song1.mp3'),
    });
    await TrackPlayer.play();
  };
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => handlePlay()}
    >
      <Image
        source={{
          uri: item.artwork,
        }}
        style={[styles.coverImage, imageStyle]}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.artist}>{item.artist}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 330,
    // width: 250,
  },
  coverImage: {
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  title: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: fontSize.lg,
    paddingVertical: spacing.sm,
    fontFamily: fontFamilies.Medium,
  },
  artist: {
    color: colors.textSecondary,
    textAlign: 'center',
    fontSize: fontSize.md,
    fontFamily: fontFamilies.Regular,
  },
});

export default SongCard;
