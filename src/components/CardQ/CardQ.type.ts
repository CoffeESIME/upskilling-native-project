import { question } from '../../store/services/quotesApi';
import { BasePropsQ } from '../../../utils/generalTypes';
import { ReactNode } from 'react';

export type CardQProps = BasePropsQ & {
  question: question;
  prev: () => void;
  next: () => void;
  selectAnswer: (answer: string, id: number) => void;
  showNext?: boolean;
  showPrev?: boolean;
  action: ReactNode;
  showAction?: boolean;
  element: number;
  selectedAnswer: string;
};
