export const Next = ({ handleNext }) => {
  return (
    <div className='flex justify-end items-center w-11/12 mt-5'>
      <button
        className='text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg px-6 py-2.5'
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
