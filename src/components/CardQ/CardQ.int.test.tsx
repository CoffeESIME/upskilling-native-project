import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CardQ } from './CardQ'; // Update the import path
import { question } from '../../store/services/quotesApi';
//this is an example of test
jest.mock('../../../utils/helpers', () => ({
  replaceHTMLEntities: jest.fn((str) => str),
  shuffleArray: jest.fn((array) => array), // Mock shuffleArray to return the array as-is for predictability in tests
}));

describe('CardQ', () => {
  const mockQuestion: question = {
    category: 'Sample Category',
    question: 'Sample Question?',
    correct_answer: 'Correct Answer',
    incorrect_answers: ['Incorrect 1', 'Incorrect 2', 'Incorrect 3'],
    type: 'multiple',
  };

  it('renders question and options', () => {
    const mockFnQ = jest.fn();
    const { getByText } = render(
      <CardQ
        action={undefined}
        element={0}
        next={mockFnQ}
        prev={mockFnQ}
        question={mockQuestion}
        selectAnswer={jest.fn()}
        selectedAnswer=""
      />
    );

    expect(getByText('Sample Category')).toBeTruthy();
    expect(getByText('Sample Question?')).toBeTruthy();
    mockQuestion.incorrect_answers.forEach((answer) => {
      expect(getByText(answer)).toBeTruthy();
    });
    expect(getByText('Correct Answer')).toBeTruthy();
  });

  it('calls selectAnswer on option press', () => {
    const mockSelectAnswer = jest.fn();
    const mockFnQ = jest.fn();
    const { getByText } = render(
      <CardQ
        action={undefined}
        element={1}
        next={mockFnQ}
        prev={mockFnQ}
        question={mockQuestion}
        selectAnswer={mockSelectAnswer}
        selectedAnswer=''
      />
    );

    fireEvent.press(getByText('Correct Answer'));
    expect(mockSelectAnswer).toHaveBeenCalledWith('Correct Answer', 1);
  });
});
