import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CardQProps } from './CardQ.type';
import { ButtonQ } from '../ButtonQ/ButtonQ';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { replaceHTMLEntities } from '../../../utils/helpers';
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
}) => {
  return (
    <View style={{ height: '50%' }}>
      <Card style={style.container}>
        <Card.Content>
          <View style={{ gap: 10, marginBottom: 10 }}>
            <Text variant="titleLarge">{question.category}</Text>
            <Text variant="bodyMedium">
              {replaceHTMLEntities(question.question)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            {question.incorrect_answers.map((answer, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => selectAnswer(answer, element)}
                style={{
                  backgroundColor: 'red',
                  borderRadius: 10,
                  height: 30,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
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
            <TouchableOpacity
              onPress={() => selectAnswer(question.correct_answer, element)}
              style={{
                backgroundColor: 'red',
                borderRadius: 10,
                height: 30,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text variant="bodySmall">
                {replaceHTMLEntities(question.correct_answer)}
              </Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
        <Card.Actions style={style.actions}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {showPrev ? (
              <ButtonQ onPress={() => prev()} style={style.button}>
                Previous
              </ButtonQ>
            ) : null}
            {showNext ? (
              <ButtonQ onPress={() => next()} style={style.button}>
                Next
              </ButtonQ>
            ) : null}
          </View>
          <View>{showAction ? action : null}</View>
        </Card.Actions>
      </Card>
    </View>
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
