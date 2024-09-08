import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

interface ExploreScreenProps {
  navigation: any; // You can use NavigationProp if you're using @react-navigation/native types
}

const ExploreScreen: React.FC<ExploreScreenProps> = ({ }) => {
  const categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance'];
  
  // Dummy data for colorful views
  const trendingItems = [
    { id: 1, color: '#ff6347', title: 'Movie 1' },
    { id: 2, color: '#87ceeb', title: 'Movie 2' },
    { id: 3, color: '#ffb6c1', title: 'Movie 3' },
    { id: 4, color: '#32cd32', title: 'Movie 4' },
    { id: 5, color: '#8a2be2', title: 'Movie 5' },
    { id: 6, color: '#ff6347', title: 'Movie 6' },
  ];

  // Render item for the grid (Colorful views)
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.colorBlock, { backgroundColor: item.color }]}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <Feather name="search" size={24} color="black" />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Trending Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <FlatList
          data={trendingItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  categoryButton: {
    backgroundColor: '#ff6347',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  colorBlock: {
    height: 150,
    flex: 1,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ExploreScreen;
