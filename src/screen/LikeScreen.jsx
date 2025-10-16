import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SongCard from '../components/SongCard';
import { colors } from '../constants/colors';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';

function LikeScreen() {
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
        <TouchableOpacity>
          <FontAwesome6
            name="sliders"
            iconStyle="solid"
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        key={2}
        ListHeaderComponent={
          <Text style={styles.headingText}>Liked Songs</Text>
        }
        data={[1, 2, 3, 4, 5]}
        renderItem={() => (
          <SongCard
            containerStyle={{
              width: '47%',
            }}
            imageStyle={{
              width: 160,
              height: 160,
            }}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 500,
          paddingHorizontal: spacing.lg,
        }}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: spacing.lg,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  headingText: {
    fontSize: fontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.Bold,
    paddingVertical: spacing.lg,
  },
});

export default LikeScreen;
