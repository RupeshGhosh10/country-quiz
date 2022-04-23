export const Option = ({ char, option, handleClick }) => {
  return (
    <li className='mb-4 flex justify-center'>
      <button
        className='border-2 border-sky-700 w-11/12 py-2 rounded-xl flex items-center justify-start text-sky-800 hover:bg-amber-500 hover:border-amber-500 hover:text-white'
        onClick={() => handleClick(option)}
      >
        <p className='ml-3'>{char}</p>
        <p className='ml-6'>{option}</p>
      </button>
    </li>
  );
}
