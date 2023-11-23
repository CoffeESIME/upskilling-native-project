import React from 'react';
import { render } from '@testing-library/react-native';
import { CardReviewQ } from './CardReviewQ';
//this is an example of test
describe('CardReviewQ', () => {
  it('renders the correct answer when isCorrect is true', () => {
    const { getByText } = render(
      <CardReviewQ
        correct="Correct Answer"
        isCorrect={true}
        question="Sample Question?"
        wrong="Wrong Answer"
      />
    );

    expect(getByText('Correct: Correct Answer')).toBeTruthy();
  });

  it('renders the wrong and correct answers when isCorrect is false', () => {
    const { getByText } = render(
      <CardReviewQ
        correct="Correct Answer"
        isCorrect={false}
        question="Sample Question?"
        wrong="Wrong Answer"
      />
    );

    expect(getByText('Wrong: Wrong Answer')).toBeTruthy();
    expect(getByText('Correct Answer: Correct Answer')).toBeTruthy();
  });
});
