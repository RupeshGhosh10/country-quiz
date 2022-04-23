import image from '../assets/undraw_winners_ao2o 2.svg';

export const QuizOver = ({ score, handleTryAgain }) => {
  return (
    <div className='flex justify-center items-center flex-col mt-6'>
      <img
        src={image}
        alt='winner'
        className='scale-100'
      />
      <h1 className='mt-10 font-extrabold text-4xl text-sky-900'>Results</h1>
      <p className='mt-2 text-sky-900'>You got <span className='text-2xl font-bold'>{score}</span> correct answer</p>
      <button
        className='mt-5 mb-2 font-medium rounded-lg px-6 py-2.5 text-sky-900 border-2 border-sky-900 hover:bg-sky-900 hover:text-white'
        onClick={handleTryAgain}
      >
        Try Again
      </button>
    </div>
  );
}