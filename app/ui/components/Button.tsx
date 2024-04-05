export default function Button({ btnName, onClick, isDisabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-456 h-56 fixed top-613 left-492 px-148 gap-10 border-t-0 border-r-0 border-b-0 rounded-tl-6 opacity-0"
      disabled={isDisabled}
    >
      {btnName}
    </button>
  );
}
