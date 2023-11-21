import { question } from "../../store/services/quotesApi";
import { BasePropsQ } from "../../../utils/generalTypes";

export type CardQProps = BasePropsQ & {
    question: question;
    prev: ()=> void;
    next: ()=> void;
    selectAnswer: (answer: string) => void;
    showNext?: boolean;
    showPrev?: boolean;
} 