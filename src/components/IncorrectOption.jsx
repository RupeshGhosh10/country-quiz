export const IncorrectOption = ({ char, option }) => {
  return (
    <li className='mb-4 flex justify-center'>
      <button className='border-2 w-11/12 py-2 rounded-xl flex items-center justify-start text-white bg-red-400 border-red-400'>
        <p className='ml-3'>{char}</p>
        <p className='ml-6'>{option}</p>
      </button>
    </li>
  );
}