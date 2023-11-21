import { View } from 'react-native';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
import { useAppSelector } from '../../src/store';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useRouter } from 'expo-router';
import { useGetQuotesQuery } from '../../src/store/services/quotesApi';
import { replaceHTMLEntities } from '../../utils/helpers';
import { CardReviewQ } from '../../src/components/CardReviewQ/CardReviewQ';
import { useEffect } from 'react';
export default function review() {
  const { refetch, data } = useGetQuotesQuery({
    amount: 10,
    difficulty: 'hard',
  });
  const { user_answers } = useAppSelector((state) => state.quotes);
  const router = useRouter();
  const pressReturn = () => {
    refetch();
    router.push('/quotes/');
  };
  useEffect(() => {});
  return (
    data && (
      <View>
        <View>
          <HeaderQ />
        </View>
        {data.results.map((question, i) => {
          if (question.correct_answer == user_answers[i]) {
            return (
              <View key={i}>
                <CardReviewQ
                  correct={question.correct_answer}
                  isCorrect={true}
                  question={question.question}
                  wrong={user_answers[i]}
                />
              </View>
            );
          }

          return (
            <View key={i}>
              <CardReviewQ
                correct={question.correct_answer}
                isCorrect={false}
                question={replaceHTMLEntities(question.question)}
                wrong={user_answers[i]}
              />
            </View>
          );
        })}
        <ButtonQ onPress={pressReturn}>Take again</ButtonQ>
      </View>
    )
  );
}
