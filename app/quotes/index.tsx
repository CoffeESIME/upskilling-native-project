import { ActivityIndicator, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useGetQuotesQuery } from '../../src/store/services/quotesApi';


// eslint-disable-next-line react/function-component-definition
export default function Login() {
  const { data, error, isLoading, isFetching } = useGetQuotesQuery({
    amount: 10,
    difficulty: 'hard',
  });
  
  console.log('the data', data, error, isLoading, isFetching);
  if (isLoading || isFetching)
    return <ActivityIndicator animating={true} size="large" />;
  if (error) return <Text>Error</Text>;
  return (
    <View style={style.container}>
      <Text>This is the login </Text>
      {data?.results.map((question, i) => (
        <Text key={i}>{question.category}</Text>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
