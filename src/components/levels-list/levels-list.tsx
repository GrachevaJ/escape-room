import { levels } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setLevel } from '../../store/site-process/site-process';
import { getLevel } from '../../store/site-process/selectors';
import { LevelName } from '../../types/types';
import Level from '../level/level';

const LevelsList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const activeLevel = useAppSelector(getLevel);

  const handleClick = (name: LevelName) => {
    dispatch(setLevel(name));
  };

  return (
    <ul className="filter__list">
      {levels.map((level) =>
        <Level key={level} name={level} isActive={level === activeLevel} onClick={handleClick}/>)}
    </ul>
  );
};

export default LevelsList;
