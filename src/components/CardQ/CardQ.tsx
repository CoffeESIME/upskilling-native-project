import { useEffect, useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { CardQProps } from './CardQ.type';
import { ButtonQ } from '../ButtonQ/ButtonQ';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { replaceHTMLEntities } from '../../../utils/helpers';
import { shuffleArray } from '../../../utils/helpers';
export const CardQ: React.FC<CardQProps> = ({
  question,
  prev,
  next,
  selectAnswer,
  showNext = false,
  showPrev = false,
  action,
  showAction = false,
  element,
  selectedAnswer,
}) => {
  const [userAction, setUserAction] = useState<boolean>(true);
  const [options, setOptions] = useState<string[]>([]);
  useEffect(() => {
    const combinedOptions = [
      ...question.incorrect_answers,
      question.correct_answer,
    ];
    const shuffledOptions = shuffleArray(combinedOptions);
    setOptions(shuffledOptions);
  }, [question]);

  return (
    <View style={{ height: '50%', margin: 40 }}>
      <Card style={style.container}>
        <Card.Content>
          <View style={{ gap: 10, marginBottom: 20 }}>
            <Text style={{ textAlign: 'center' }} variant="titleLarge">
              {replaceHTMLEntities(question.category)}
            </Text>
            <Text variant="bodyMedium">
              {replaceHTMLEntities(question.question)}
            </Text>
          </View>
          <View style={style.containerOptions}>
            {options.map((answer, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setUserAction(false);
                  selectAnswer(answer, element);
                }}
                style={{
                  backgroundColor:
                    selectedAnswer == answer ? 'gray' : '#A9A9A9',
                  ...style.options,
                }}
              >
                <Text
                  key={i}
                  style={{
                    textAlign: 'center',
                  }}
                  variant="bodySmall"
                >
                  {replaceHTMLEntities(answer)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card.Content>
        <Card.Actions style={style.actions}>
          <View style={style.containerActions}>
            {showPrev ? (
              <ButtonQ
                onPress={() => {
                  setUserAction(false);
                  prev();
                }}
                style={style.button}
              >
                Previous
              </ButtonQ>
            ) : null}
            {showNext ? (
              <ButtonQ
                disabled={userAction}
                onPress={() => {
                  next();
                  setUserAction(true);
                }}
                style={style.button}
              >
                Next
              </ButtonQ>
            ) : null}
            {showAction ? action : null}
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '90%',
    minHeight: '50%',
    maxHeight: '90%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    flexGrow: 1,
    minHeight: 35,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '40%',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    gap: 10,
    //   minHeight: '20%',
  },
  text: { alignContent: 'center', alignSelf: 'center', backgroundColor: 'red' },
  containerOptions: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
  containerActions: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  options: {
    borderRadius: 10,
    minHeight: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
