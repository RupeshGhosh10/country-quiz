import { useEffect, useState } from 'react';
import { getAllCountries } from './service/countryApi';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { Quiz } from './components/Quiz';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCountries();
      setCountries(data.filter(x => x.capital !== undefined && x.region !== 'Antarctic' && x.population >= 50000));
    })();
  }, []);

  return (
    <main className='flex justify-center items-center flex-col mt-0 sm:mt-10 w-screen'>
      <Header />
      <Card>
        {countries.length === 0 ? <Loading /> : <Quiz countries={countries} />}
      </Card>
    </main>
  );
}

export default App;
