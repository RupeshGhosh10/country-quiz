import { CorrectOption } from './CorrectOption';
import { IncorrectOption } from './IncorrectOption';
import { Option } from './Option';

const charList = ['A', 'B', 'C', 'D'];

export const OptionsList = ({ options, handleClick, completed, correctOption, selectedOption }) => {
  return (
    <ul className='mt-5 list-none'>
      {options.map((option, index) => {
        if (completed && option === correctOption) {
          return <CorrectOption
            key={index}
            char={charList[index]}
            option={option}
          />
        }
        else if (completed && option === selectedOption) {
          return <IncorrectOption
            key={index}
            char={charList[index]}
            option={option}
          />
        }
        else {
          return <Option
            key={index}
            char={charList[index]}
            option={option}
            handleClick={handleClick}
          />
        }
      })}
    </ul>
  );
}
