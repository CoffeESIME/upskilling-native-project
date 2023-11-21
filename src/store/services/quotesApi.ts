import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// api.php?amount=10&difficulty=hard
export interface question {
    category: string;
    type: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }

interface response {
  response_code: number;
  results: question[];
}
export const quoteApi = createApi({
  reducerPath: 'quotesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/' }),
  endpoints: (builder) => ({
    getQuotes: builder.query<response, { amount: number; difficulty: string }>({
      query: ({ amount, difficulty }) =>
        `api.php?amount=${amount}&difficulty=${difficulty}`,
    }),
  }),
});

export const { useGetQuotesQuery } = quoteApi;
