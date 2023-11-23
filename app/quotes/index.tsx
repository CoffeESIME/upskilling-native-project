import { ActivityIndicator, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { CardQ } from '../../src/components/CardQ/CardQ';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useRouter } from 'expo-router';
import { useQuizData } from '../../src/hooks/quizdata-hook';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../src/store';
import { answersActions } from '../../src/store/features/quotes-slice';
// eslint-disable-next-line react/function-component-definition
export default function Quotes() {
  const { error, isFetching, isLoading, data, questionEl, setQuestionEl } =
    useQuizData();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [responses, setResponses] = useState<string[]>(['']);
  useEffect(() => {
    if (responses[0] !== '') {
      dispatch(answersActions.setUserAnswers(responses));
    }
  }, [responses]);
  useEffect(() => {
    setResponses(new Array(data?.results.length).fill(''));
  }, [data]);
  const action = (answer: string, id: number) => {
    setResponses(
      responses.map((answerEl, index) => (index === id ? answer : answerEl))
    );
  };
  const goNextEl = () => {
    setQuestionEl((next) => next + 1);
  };
  const goPrevEl = () => {
    setQuestionEl((prev) => prev - 1);
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
  return (
    data && (
      <View style={style.container}>
        <View style={style.mainContainer}>
          <View style={style.instructionsContainer}>
            <Text style={style.mainText}>Select the correct answers</Text>
            <Text style={style.secondaryText}>
              You will receive the correct answers at the end of the quiz
            </Text>
          </View>
        </View>
        <CardQ
          action={
            <ButtonQ
              disabled={responses[responses.length - 1] == ''}
              mode="contained"
              onPress={goReview}
              style={style.confirmButton}
            >
              Confirm
            </ButtonQ>
          }
          element={questionEl}
          next={goNextEl}
          prev={goPrevEl}
          question={data.results[questionEl]}
          selectAnswer={action}
          selectedAnswer={responses[questionEl]}
          showAction={questionEl == data.results.length - 1}
          //showAction={true}
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
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 30,
    padding: 0,
    margin: 30,
  },
  mainText: {
    flex: 0,
    backgroundColor: 'gray',
    fontSize: 25,
    margin: 20,
  },
  secondaryText: {
    flex: 0,
    fontSize: 15,
    margin: 20,
  },
  confirmButton: {
    flexGrow: 1,
    minHeight: 35,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '40%',
  },
});
