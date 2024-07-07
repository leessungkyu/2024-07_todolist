import { FaTrashAlt } from "react-icons/fa";
import { alarm } from "../../utils/util";

export type TrashIconProps = {
    onDelete? : () => void;
}
const TrashIcon = ({onDelete = alarm}:TrashIconProps) => {
    return <FaTrashAlt onClick={onDelete} />

}

export default TrashIcon;