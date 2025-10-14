import { colors } from '../constants/colors';
import { fontSize, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SongCard from './SongCard';

function SongCardWithCategory() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Recommended for you</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={SongCard}
        horizontal={true}
        ItemSeparatorComponent={
          <View style={{ marginHorizontal: spacing.sm }} />
        }
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    color: colors.textPrimary,
    fontSize: fontSize.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    fontFamily: fontFamilies.Bold,
  },
});

export default SongCardWithCategory;
