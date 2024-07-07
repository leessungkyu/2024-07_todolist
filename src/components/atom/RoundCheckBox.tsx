import { alarm } from "../../utils/util";

export type RoundCheckBoxProps = {
    isChecked?: boolean;
    handleChked? : () => void;
}
const RoundCheckBox = ({ isChecked, handleChked = () => alarm }:RoundCheckBoxProps) => {
    return <input type="checkbox" checked={isChecked} onChange={handleChked} className="text-purple-600 bg-gray-100 border-gray-300 rounded"/>
}

export default RoundCheckBox;