import { StyleSheet, View, Platform, ScrollView } from 'react-native';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
import { useAppSelector } from '../../src/store';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useRouter } from 'expo-router';
import { CardReviewQ } from '../../src/components/CardReviewQ/CardReviewQ';
import { useQuizData } from '../../src/hooks/quizdata-hook';
export default function review() {
  const { refetch, data } = useQuizData();
  const { user_answers } = useAppSelector((state) => state.quotes);
  const router = useRouter();
  const pressReturn = () => {
    refetch();
    router.push('/quotes/');
  };
  return (
    data && (
      <ScrollView style={style.container}>
        <View style={style.header}>
          <HeaderQ />
        </View>
        {data.results.map((question, i) => {
          const isCorrectAnswer = question.correct_answer == user_answers[i];
          return (
            <View
              key={i}
              style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                ...Platform.select({
                  android: {
                    margin: 0,
                  },
                  web: {
                    margin: 20,
                  },
                }),
              }}
            >
              <CardReviewQ
                correct={question.correct_answer}
                isCorrect={isCorrectAnswer}
                question={question.question}
                wrong={user_answers[i]}
              />
            </View>
          );
        })}
        <View>
          <ButtonQ
            onPress={pressReturn}
            style={{
              margin: 10,
              alignSelf: 'center',
              width: '40%',
              ...Platform.select({
                web: {
                  flexGrow: 1,
                  maxHeigth: 35,
                },
              }),
            }}
          >
            Take again
          </ButtonQ>
        </View>
      </ScrollView>
    )
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: 'black'
  },
  header: {
    ...Platform.select({
      android: {
       
      },
    }),
  },
});
