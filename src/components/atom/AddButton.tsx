type AddButtonProps = {
    handleClick? : () => void;
}

const AddButton = ({handleClick}:AddButtonProps) => {
    return <button 
      className="py-5 px-8 rounded-3xl bg-purple-500 text-white font-bold"
      onClick={handleClick}> 
      + New task</button>
}

export default AddButton;