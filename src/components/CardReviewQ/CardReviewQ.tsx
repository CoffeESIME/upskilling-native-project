import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { ButtonQ } from '../ButtonQ/ButtonQ';
import { View, StyleSheet } from 'react-native';
import { replaceHTMLEntities } from '../../../utils/helpers';

export interface CardReviewQProps {
  children: React.ReactNode;
  question: string;
}

export const CardReviewQ: React.FC<CardReviewQProps> = ({
  children,
  question,
}) => {
  return (
    <Card style={style.container}>
      <Card.Title title={question} />
      <Card.Actions style={style.actions}>{children}</Card.Actions>
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
    backgroundColor: 'red'
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
