import logo from '../assets/undraw_adventure_4hum 1.svg';

export const Header = () => {
  return (
    <div className='flex justify-between items-end pl-1 mb-2 w-11/12 sm:w-6/12 lg:w-4/12'>
      <h1 className='text-white font-bold text-3xl'>COUNTRY QUIZ</h1>
      <img
        src={logo}
        alt='logo'
        className='scale-95 relative top-12'
      />
    </div>
  );
}
