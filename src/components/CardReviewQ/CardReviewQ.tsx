import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { replaceHTMLEntities } from '../../../utils/helpers';
import { CardReviewQProps } from './CardReview.type';

export const CardReviewQ: React.FC<CardReviewQProps> = ({
  question,
  correct,
  isCorrect,
  wrong,
}) => {
  return (
    <Card style={style.container}>
      <Text style={{ margin: 10, padding: 10, color: 'black' }}>
        {replaceHTMLEntities(question)}
      </Text>
      {isCorrect ? (
        <Card.Content style={{...style.actions}}>
          <Text style={style.textCorrect}>Correct: {replaceHTMLEntities(correct)}</Text>
        </Card.Content>
      ) : (
        <Card.Content style={{ ...style.actions }}>
          <Text style={style.textWrong}>Wrong: {replaceHTMLEntities(wrong)}</Text>
          <Text style={style.textCorrect}>Correct Answer: {replaceHTMLEntities(correct)}</Text>
        </Card.Content>
      )}
    </Card>
  );
};

const style = StyleSheet.create({
  container: {
    maxWidth: 500,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
    margin: 10,
  },
  button: {
    minHeight: 35,
    flex: 1,
    maxHeight: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10,
    backgroundColor: '#D3D3D3',
    margin: 10,
    padding:10,
    borderRadius: 10,
    justifyContent: 'center',
    maxWidth:'80%'
  },
  textCorrect: {
    alignContent: 'center',
    alignSelf: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
  textWrong:{
    alignContent: 'center',
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold',
  }
});
