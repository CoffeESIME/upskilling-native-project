import { ActivityIndicator, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useGetQuotesQuery } from '../../src/store/services/quotesApi';
import { CardQ } from '../../src/components/CardQ/CardQ';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../src/store';
import { answersActions } from '../../src/store/features/quotes-slice';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useRouter } from 'expo-router';
// eslint-disable-next-line react/function-component-definition
export default function Quotes() {
  const { data, error, isLoading, isFetching } = useGetQuotesQuery({
    amount: 10,
    difficulty: 'hard',
  });
  const [questionEl, setQuestionEl] = useState<number>(0);
  const [responses, setResponses] = useState(['']);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const correctAnswers: string[] = [];

  useEffect(() => {
    setQuestionEl(0);
    if (data?.results) {
      for (const answer in data?.results) {
        correctAnswers.push(data?.results[answer].correct_answer);
      }
      setResponses(new Array(data?.results.length).fill(''));
      dispatch(answersActions.setAnwers(correctAnswers));
    }
  }, [data]);
  useEffect(() => {
    dispatch(answersActions.setUserAnswers(responses));
  }, [responses]);
  const action = (answer: string, id: number) => {
    setResponses(
      responses.map((answerEl, index) => (index === id ? answer : answerEl))
    );
  };
  const goNextEl = () => {
    const next = questionEl + 1;
    setQuestionEl(next);
  };
  const goPrevEl = () => {
    const prev = questionEl - 1;
    setQuestionEl(prev);
  };
  const goReview = () => {
    router.push('/review/');
  };
  if (isLoading || isFetching)
    return (
      <View style={style.container}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  if (error)
    return (
      <View style={style.container}>
        <Text>Error Fetching data</Text>
      </View>
    );
  console.log(responses.findLast);
  return (
    data && (
      <View style={style.container}>
        <View
          style={{
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              height: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'gray',
              borderRadius: 30,
              padding: 30,
              margin: 30
            }}
          >
            <Text
              style={{
                flex: 0,
                backgroundColor: 'gray',
                fontSize: 40,
                margin: 20,
              }}
            >
              Select the correct answers
            </Text>
            <Text
              style={{
                flex: 0,
                backgroundColor: 'gray',
                fontSize: 20,
                padding: 10,
              }}
            >
              You will recieve the correct answers at the end of the quiz
            </Text>
          </View>
        </View>
        <CardQ
          action={
            <ButtonQ
              disabled={responses[responses.length - 1] == ''}
              onPress={goReview}
              style={{
                flexGrow: 0,
                minHeight: 35,
                flex: 1,
                maxHeight: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Confirm</Text>
            </ButtonQ>
          }
          element={questionEl}
          next={goNextEl}
          prev={goPrevEl}
          question={data.results[questionEl]}
          selectAnswer={action}
          selectedAnswer={responses[questionEl]}
          showAction={questionEl == data.results.length - 1}
          showNext={
            questionEl >= 0 ? questionEl < data.results.length - 1 : undefined
          }
          showPrev={questionEl > 0}
        />
      </View>
    )
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
});
