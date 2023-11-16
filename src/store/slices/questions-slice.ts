import {createSlice} from '@reduxjs/toolkit'

interface question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answer: string[];
}

interface questionsState {
    questions : question[] | null
}
const initialState: questionsState ={
    questions: null,
}

const questionsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
    }
})

export const questionsActions = questionsSlice.actions;
export default questionsSlice.reducer;