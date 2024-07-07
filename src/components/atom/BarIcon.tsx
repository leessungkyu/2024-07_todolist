import { IoMdMenu } from "react-icons/io";
import { alarm } from "../../utils/util";

type BarIconType = {
    onClick? : () => void;
}

const BarIcon = ({onClick = alarm}:BarIconType) => {
    return(
        <IoMdMenu onClick={onClick}/>
    )
}

export default BarIcon;