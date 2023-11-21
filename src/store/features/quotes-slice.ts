import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface correct_answers {
  answers: string[] | undefined;
}

const initialState: correct_answers = {
  answers: undefined,
};

const answersSlice = createSlice({
  name: 'quotes-answers',
  initialState,
  reducers: {
    setAnwers(state, action: PayloadAction<string[]>) {
      state.answers = action.payload;
    },
  },
});

export const answersActions = answersSlice.actions;
export default answersSlice.reducer;
