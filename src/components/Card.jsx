export const Card = ({ children }) => {
  return (
    <div className='block p-7 rounded-2xl border-gray-200 bg-white shadow-md w-11/12 sm:w-6/12 lg:w-4/12'>
      {children}
    </div>
  );
}
