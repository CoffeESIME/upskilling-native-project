import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CardQProps } from './CardQ.type';


export const CardQ: React.FC<CardQProps> = ({}) => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
¿    <Card.Actions>
    </Card.Actions>
  </Card>
);