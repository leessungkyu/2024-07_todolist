import { useState } from "react";
import Label from "../atom/CheckLabel";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";
import CheckedLabel from "../atom/CheckLabel";

export type TodoItemProps = {
  id: number;  
  contents: string;
  onDelete?: () => void;
}

const TodoItem = ({contents, onDelete}:TodoItemProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleChked = () => { setIsChecked(!isChecked)};

    const obj = {
        roundCheckBox: {
            isChecked,
            handleChked,
        },
        checkedlabel: {
            isChecked,
            contents,
        },
        trashIcon: {
            onDelete,
        }
    }
    return <div className="flex items-center gap-5">
        <RoundCheckBox { ...obj.roundCheckBox } />
        <CheckedLabel {...obj.checkedlabel } />
        { isChecked && <TrashIcon {...obj.trashIcon}/> }
    </div>
}

export default TodoItem;