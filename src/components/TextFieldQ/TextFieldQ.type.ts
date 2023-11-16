import { BasePropsQ } from "../../utils/generalTypes"

export type TextFieldQProps = BasePropsQ & {
    label: string;
    onChange: (text: string) => void;
    value: string;
}