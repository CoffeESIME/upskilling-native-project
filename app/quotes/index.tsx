import { ActivityIndicator, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useGetQuotesQuery } from '../../src/store/services/quotesApi';
import { CardQ } from '../../src/components/CardQ/CardQ';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../src/store';
import { answersActions } from '../../src/store/features/quotes-slice';
// eslint-disable-next-line react/function-component-definition
export default function Quotes() {
  const { data, error, isLoading, isFetching } = useGetQuotesQuery({
    amount: 10,
    difficulty: 'hard',
  });
  const [questionEl, setQuestionEl] = useState<number>(0);
  const [responses, setResponses] = useState(['']);
  const dispatch = useAppDispatch();
  const correctAnswers: string[] = [];
  useEffect(() => {
    if (data?.results) {
      for (const answer in data?.results) {
        correctAnswers.push(data?.results[answer].correct_answer);
      }
      setResponses(new Array(data?.results.length).fill(''));
      dispatch(answersActions.setAnwers(correctAnswers));
      console.log(correctAnswers);
    }
  }, [data]);
  const action = (answer: string) => {
    console.log('question action', answer);
    const newRes = responses;
    newRes[questionEl] = answer;
    setResponses(newRes);
  };
  const goNextEl = () => {
    const next = questionEl + 1;
    setQuestionEl(next);
  };
  const goPrevEl = () => {
    const prev = questionEl - 1;
    setQuestionEl(prev);
  };
  console.log('the data', data, error, isLoading, isFetching);
  console.log(responses);
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
  return (
    <View style={style.container}>
      <CardQ
        element={questionEl}
        next={goNextEl}
        prev={goPrevEl}
        question={data?.results[questionEl]}
        selectAnswer={action}
        showNext={questionEl >= 0 && questionEl < data?.results.length - 1}
        showPrev={questionEl > 0}
      />
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
