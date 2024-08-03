import { ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import { fetchTopRatedMovies } from '@/api/movies';
import { useQuery } from '@tanstack/react-query';

export default function TabOneScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchTopRatedMovies,
  });

  console.log("data: ", data);

  if (isLoading) return <ActivityIndicator />

  if (error) return <Text>{error.message}</Text>


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <FlatList 
        data={data.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.original_title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
