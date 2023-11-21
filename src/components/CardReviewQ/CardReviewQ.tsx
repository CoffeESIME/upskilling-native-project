import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { replaceHTMLEntities } from '../../../utils/helpers';

export interface CardReviewQProps {
  question: string;
  isCorrect: boolean;
  correct: string;
  wrong: string;
}

export const CardReviewQ: React.FC<CardReviewQProps> = ({
  question,
  correct,
  isCorrect,
  wrong,
}) => {
  console.log('iscorred', isCorrect);
  return (
    <Card style={style.container}>
      <Text style={{margin: 10, padding:10}}>{replaceHTMLEntities(question)} </Text>
      {isCorrect ? (
        <Card.Content style={style.actions}>
          <Text>Correct {replaceHTMLEntities(correct)}</Text>
        </Card.Content>
      ) : (
        <Card.Content style={style.actions}>
          <Text>
            Wrong:{replaceHTMLEntities(wrong)} , Correct Answer :
            {replaceHTMLEntities(correct)}
          </Text>
        </Card.Content>
      )}
    </Card>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
    width: '100%',
    maxHeight: '70%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
    margin: 10,
  },
  button: {
    flexGrow: 1,
    minHeight: 35,
    flex: 1,
    maxHeight: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10,
  },
  text: { alignContent: 'center', alignSelf: 'center', backgroundColor: 'red' },
});
