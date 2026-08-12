import { AuthorizationStatus, StoreSlice } from '../../const';
import { State } from '../../types/types';

export const getAuthorizationStatus = ({[StoreSlice.UserProcess]: USER_PROCESS}: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;

