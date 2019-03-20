import { IAppReduxState } from 'shared/types/app';
import * as NS from '../namespace';

export function selectState(state: IAppReduxState): NS.IReduxState {
  return state.adaptability;
}

export function selectHydrated(state: IAppReduxState): boolean {
  return selectState(state).data.hydrated;
}
