import { colors } from '../constants/colors';
import { fontSize, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SongCard from './SongCard';

function SongCardWithCategory({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{item.title}</Text>
      <FlatList
        data={item.songs}
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
