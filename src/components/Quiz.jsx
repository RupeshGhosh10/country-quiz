import { useEffect, useState } from 'react';
import { Flag } from './Flag';
import { Next } from './Next';
import { OptionsList } from './OptionsList';
import { Question } from './Question';
import { QuizOver } from './QuizOver';

const shuffleArray = (array) => {
  return [...array]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const Quiz = ({ countries }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [completed, setCompleted] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(null);

  const handleClick = (option) => {
    if (completed) return;
    if (correctOption === option) setScore(score + 1);
    setCompleted(true);
    setSelectedOption(option);
  }

  const handleNext = () => setQuestionCount(questionCount + 1);

  const handleTryAgain = () => {
    setQuestionCount(1);
    setScore(0);
    setCompleted(false);
  }

  useEffect(() => {
    setCompleted(false);
    setFlag(null);
    const shuffledCountries = shuffleArray(countries).slice(0, 4);
    const random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
      case 1:
        setQuestion(`What is the capital of ${shuffledCountries[0]?.name?.common}?`);
        setCorrectOption(shuffledCountries[0]?.capital[0]);
        setOptions(shuffleArray(shuffledCountries.map(x => x?.capital[0])));
        break;
      case 2:
        setQuestion(`${shuffledCountries[0].capital[0]} is the capital of which country?`);
        setCorrectOption(shuffledCountries[0]?.name?.common);
        setOptions(shuffleArray(shuffledCountries.map(x => x?.name?.common)));
        break;
      case 3:
        setFlag(shuffledCountries[0]?.flags?.png);
        setQuestion('This flag belongs to which country?');
        setCorrectOption(shuffledCountries[0]?.name?.common);
        setOptions(shuffleArray(shuffledCountries.map(x => x?.name?.common)));
        break;
      default: 
    }

  }, [countries, questionCount]);

  if (questionCount > 5) {
    return <QuizOver score={score} handleTryAgain={handleTryAgain} />
  }

  return (
    <div className='mt-7'>
      {flag && <Flag flag={flag} />}
      <Question question={question} />
      <OptionsList
        options={options}
        handleClick={handleClick}
        completed={completed}
        correctOption={correctOption}
        selectedOption={selectedOption}
      />
      {completed && <Next handleNext={handleNext} />}
    </div>
  );
}
