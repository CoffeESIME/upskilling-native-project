import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface correct_answers {
  answers: string[] ;
  user_answers: string[] ;
}

const initialState: correct_answers = {
  answers: [],
  user_answers: []
};

const answersSlice = createSlice({
  name: 'quotes-answers',
  initialState,
  reducers: {
    setAnwers(state, action: PayloadAction<string[]>) {
      state.answers = action.payload;
    },
    setUserAnswers(state, action: PayloadAction<string[]>){
      state.user_answers = action.payload;
    }
  },
});

export const answersActions = answersSlice.actions;
export default answersSlice.reducer;
