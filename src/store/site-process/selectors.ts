import { StoreSlice } from '../../const';
import { LevelName, State, TypeName } from '../../types/types';

export const getLevel = ({[StoreSlice.SiteProcess]: SITE_PROCESS}: State): LevelName => SITE_PROCESS.level;

export const getType = ({[StoreSlice.SiteProcess]: SITE_PROCESS}: State): TypeName => SITE_PROCESS.type;

