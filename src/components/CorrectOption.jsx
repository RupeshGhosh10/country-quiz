export const CorrectOption = ({ char, option }) => {
  return (
    <li className='mb-4 flex justify-center'>
      <button className='border-2 w-11/12 py-2 rounded-xl flex items-center justify-start text-white bg-green-600 border-green-600'>
        <p className='ml-3'>{char}</p>
        <p className='ml-6'>{option}</p>
      </button>
    </li>
  );
}