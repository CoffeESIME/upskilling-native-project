import { BasePropsQ } from "../../../utils/generalTypes"
export type ButtonQProps = BasePropsQ & {
    text: string;
    onPress: ()=>void;
    mode: "outlined" | "contained" | "elevated" 
} 