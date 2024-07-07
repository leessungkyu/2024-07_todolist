import { ERROR } from "../../constants/errorMessage";

type PureLabelType = {
    contents? : string;
}

const PureLabel = ({contents = ERROR.NOCONTENT}:PureLabelType) => {
    return (
        <span className="text-white font-bold text-lg">{contents}</span>
    )
}
export default PureLabel;