import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PlayerShuffleToggle from '../components/PlayerShuffleToggle';
import PlayerRepeatToggle from '../components/PlayerRepeatToggle';
import PlayerProgressBar from '../components/PlayerProgressBar';
// import {
//   GoToPreviousButton,
//   GoToNextButton,
//   PlayPauseButton,
// } from '../components/PlayerControls';
import { colors } from '../constants/colors';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';

function PlayerScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <FontAwesome6
            name="arrow-left"
            iconStyle="solid"
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Playing Now</Text>
      </View>
      <View style={styles.coverImageContainer}>
        <Image
          source={{
            uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
          }}
          style={styles.coverImage}
        />
      </View>
      <View style={styles.titleRowHeartContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Believer</Text>
          <Text style={styles.artist}>IMAGINE DRAGONS</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome6
            name="heart"
            iconStyle={false ? 'solid' : 'regular'}
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.playerControlsContainer}>
        <TouchableOpacity style={styles.volumeWrapper}>
          <FontAwesome6
            name={false ? 'volume-low' : 'volume-xmark'}
            iconStyle="solid"
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
        <View style={styles.repeatShuffleWrapper}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      <View>
        <PlayerProgressBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 60,
    padding: spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headingText: {
    flex: 1,
    textAlign: 'center',
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.Bold,
  },
  coverImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  coverImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  titleRowHeartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.Medium,
  },
  artist: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  playerControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  volumeWrapper: {
    flex: 1,
  },
  repeatShuffleWrapper: {
    flexDirection: 'row',
    gap: spacing.md,
  },
});

export default PlayerScreen;
