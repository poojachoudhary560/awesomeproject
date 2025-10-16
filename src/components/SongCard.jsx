import { fontFamilies } from '../constants/fonts';
import { colors } from '../constants/colors';
import { fontSize, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function SongCard({ containerStyle, imageStyle }) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Image
        source={{
          uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
        }}
        style={[styles.coverImage, imageStyle]}
      />
      <Text style={styles.title}>Monster Go Home</Text>
      <Text style={styles.artist}>Alan Walker</Text>
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
