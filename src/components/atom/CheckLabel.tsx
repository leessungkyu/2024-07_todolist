import { ERROR } from "../../constants/errorMessage";

export type CheckedLabelType = {
    contents?: string;
    isChecked? : boolean;
}

const CheckedLabel = ({isChecked = false, contents = ERROR.NOCONTENT}:CheckedLabelType) => {
    const textDone = "line-through text-gray-400"
    const textTodo = "text-gray-500 font-bold"
    return <span className={isChecked ? textDone : textTodo}>{contents}</span>
}

export default CheckedLabel;