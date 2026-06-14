import { typeLabels } from '../../const';
import { TypeName } from '../../types/types';

type TypeProps = {
  name: TypeName;
  isActive: boolean;
  onClick: (name: TypeName) => void;
}

const Type = ({name, isActive, onClick}: TypeProps):JSX.Element =>{
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className="filter__item" onClick={handleClick}>
      <input type="radio" name="type" id={name} checked={isActive} />
      <label className="filter__label" htmlFor={name}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={`#icon-${name === 'all' ? 'all-quests' : name}`}></use>
        </svg><span className="filter__label-text">{`${typeLabels[name][0].toUpperCase()}${typeLabels[name].slice(1)}`}</span>
      </label>
    </li>
  );
};

export default Type;
