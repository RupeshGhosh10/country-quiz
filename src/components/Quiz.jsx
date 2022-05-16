import { useEffect, useState } from 'react';
import { Flag } from './Flag';
import { Next } from './Next';
import { OptionsList } from './OptionsList';
import { Question } from './Question';
import { QuizOver } from './QuizOver';
import { shuffleArray } from '../util/shuffle';

export const Quiz = ({ countries }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [countryFlag, setCountryFlag] = useState(null);
  const [shuffledCountries, setShuffledCountries] = useState(shuffleArray(countries));

  const handleClick = (option) => {
    if (quizCompleted) return;
    if (correctOption === option) setScore(score + 1);
    setQuizCompleted(true);
    setSelectedOption(option);
  }

  const handleNext = () => setQuestionNumber(questionNumber + 1);

  const handleTryAgain = () => {
    setQuestionNumber(0);
    setScore(0);
    setQuizCompleted(false);
    setShuffledCountries(shuffleArray(countries));
  }

  useEffect(() => {
    setQuizCompleted(false);
    setCountryFlag(null);
    const selectedCountries = shuffledCountries.slice(questionNumber * 4, questionNumber * 4 + 4);
    const random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
      case 1:
        setQuestion(`What is the capital of ${selectedCountries[0]?.name?.common}?`);
        setCorrectOption(selectedCountries[0]?.capital[0]);
        setOptions(shuffleArray(selectedCountries.map(x => x?.capital[0])));
        break;
      case 2:
        setQuestion(`${selectedCountries[0].capital[0]} is the capital of which country?`);
        setCorrectOption(selectedCountries[0]?.name?.common);
        setOptions(shuffleArray(selectedCountries.map(x => x?.name?.common)));
        break;
      case 3:
        setCountryFlag(selectedCountries[0]?.flags?.png);
        setQuestion('This flag belongs to which country?');
        setCorrectOption(selectedCountries[0]?.name?.common);
        setOptions(shuffleArray(selectedCountries.map(x => x?.name?.common)));
        break;
      default:
    }
  }, [questionNumber, shuffledCountries]);

  if (questionNumber >= 5) {
    return <QuizOver score={score} handleTryAgain={handleTryAgain} />
  }

  return (
    <div className='mt-7'>
      {countryFlag && <Flag flag={countryFlag} />}
      <Question question={question} />
      <OptionsList
        options={options}
        handleClick={handleClick}
        completed={quizCompleted}
        correctOption={correctOption}
        selectedOption={selectedOption}
      />
      {quizCompleted && <Next handleNext={handleNext} />}
    </div>
  );
}
