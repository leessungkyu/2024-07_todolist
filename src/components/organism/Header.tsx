import BarIcon from "../atom/BarIcon";
import PureLabel from "../atom/PureLabel";

const Header = () => {
    return (
        <div className="bg-purple-500 text-white flex justify-center items-center p-5 w-full max-w-lg relative">            
            <div className="absolute  left-5 text-lg">   
             <BarIcon />
            </div>    
            <PureLabel contents="WebSite Todo"/>
        </div>
    )
}

export default Header;