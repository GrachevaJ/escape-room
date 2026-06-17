import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SiteProcess } from '../../types/state';
import { StoreSlice } from '../../const';
import { LevelName, TypeName } from '../../types/types';

const DEFAULT_LEVEL = 'any';
const DEFAULT_TYPE = 'all';


const initialState: SiteProcess = {
  level: DEFAULT_LEVEL,
  type: DEFAULT_TYPE,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<LevelName>) => {
      state.level = action.payload;
    },
    setType: (state, action: PayloadAction<TypeName>) => {
      state.type = action.payload;
    },
    resetFilters: (state) => {
      state.level = DEFAULT_LEVEL;
      state.type = DEFAULT_TYPE;
    }
  }
});

export const {setLevel, setType, resetFilters} = siteProcess.actions;

