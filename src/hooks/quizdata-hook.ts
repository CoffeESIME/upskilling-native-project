import { useGetQuotesQuery } from '../store/services/quotesApi';
import { useEffect, useState } from 'react';
export const useQuizData = () => {
  const { data, error, isLoading, isFetching, refetch } = useGetQuotesQuery({
    amount: 10,
    difficulty: 'hard',
  });
  const [questionEl, setQuestionEl] = useState<number>(0);
  useEffect(() => {
    setQuestionEl(0);
  }, [isFetching]);

  return {
    data,
    error,
    isFetching,
    isLoading,
    questionEl,
    setQuestionEl,
    refetch,
  };
};
