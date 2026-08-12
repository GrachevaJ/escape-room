import { types } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { setType } from '../../store/site-process/site-process';
import { getType } from '../../store/site-process/selectors';
import { TypeName } from '../../types/types';
import Type from '../type/type';

const TypesList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const activeType = useAppSelector(getType);

  const handleClick = (name: TypeName) => {
    dispatch(setType(name));
  };

  return (
    <ul className="filter__list">
      {types.map((type) => <Type key={type} name={type} isActive={type === activeType} onClick={handleClick}/>)}
    </ul>
  );
};

export default TypesList;

