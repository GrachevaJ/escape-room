import { levelLabels } from '../../const';
import { LevelName } from '../../types/types';

type LevelProps = {
  name: LevelName;
  isActive: boolean;
  onClick: (name: LevelName) => void;
}

const Level = ({name, isActive, onClick}: LevelProps):JSX.Element =>{
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className="filter__item" onClick={handleClick}>
      <input type="radio" name="level" id={name} checked={isActive} />
      <label className="filter__label" htmlFor={name}>
        <span className="filter__label-text">{`${levelLabels[name][0].toUpperCase()}${levelLabels[name].slice(1)}`}</span>
      </label>
    </li>
  );
};
export default Level;

