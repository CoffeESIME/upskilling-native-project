import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CardQProps } from './CardQ.type';
import { ButtonQ } from '../ButtonQ/ButtonQ';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
export const CardQ: React.FC<CardQProps> = ({
  question,
  prev,
  next,
  selectAnswer,
  showNext = false,
  showPrev = false,
}) => (
  <View>
    <Card style={style.container}>
      <Card.Content>
        <View style={{ gap: 10, marginBottom: 10 }}>
          <Text variant="titleLarge">{question.category}</Text>
          <Text variant="bodyMedium">{question.question}</Text>
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
              onPress={() => selectAnswer(answer)}
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
                variant="bodySmall"
                style={{
                  textAlign: 'center',
                }}
              >
                {answer}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => selectAnswer(question.correct_answer)}
            style={{
              backgroundColor: 'red',
              borderRadius: 10,
              height: 30,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text variant="bodySmall">{question.correct_answer}</Text>
          </TouchableOpacity>
        </View>
      </Card.Content>
      <Card.Actions>
        {!!showPrev && <ButtonQ onPress={() => prev()} text="Previous" />}
        {!!showNext && <ButtonQ onPress={() => next()} text="Next" />}
      </Card.Actions>
    </Card>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
    width: '80%',
    height: 100,
    maxHeight: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
